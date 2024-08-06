import { useSelector } from "react-redux";
import { requestApi } from "../utils/apiSetting";

export const useApi = () => {
  const userInfo = useSelector((state) => state.userInfo);

  const createDiary = async ({ title, content, diaryDate }) => {
    try {
      const response = await requestApi.post(
        "/diaries",
        { title, content, diaryDate },
        {
          headers: { Authorization: `Bearer ${userInfo.accessToken}` },
        }
      );
      return response.data.result.id;
    } catch (error) {
      console.error("Error creating diary:", error);
      throw error;
    }
  };

  const generateAIImage = async ({
    prompt,
    gender,
    age,
    hairStyle,
    clothes,
  }) => {
    const imageData = {
      prompt,
      ...(gender && { gender }),
      ...(age && { age }),
      ...(hairStyle && { hairStyle }),
      ...(clothes && { clothes }),
    };
    try {
      const response = await requestApi.post("/api/dalle", imageData, {
        headers: { Authorization: `Bearer ${userInfo.accessToken}` },
      });
      return response.data.data.url;
    } catch (error) {
      console.error("Error generating AI image:", error);
      throw error;
    }
  };

  const saveDiaryImage = async (diaryId, imageUrl) => {
    try {
      console.log("Saving image for diary:", diaryId, "URL:", imageUrl);
      const response = await requestApi.post(
        `/diaries/${diaryId}/images`,
        JSON.stringify({ imageUrl: imageUrl }), // 명시적으로 JSON 문자열로 변환
        {
          headers: {
            Authorization: `Bearer ${userInfo.accessToken}`,
            "Content-Type": "application/json", // Content-Type 명시
          },
        }
      );
      console.log("Save image response:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error saving diary image:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  const generateAIComment = async ({ username, prompt }) => {
    const commentData = { username, prompt };
    try {
      const response = await requestApi.post("/api/gpt", commentData, {
        headers: { Authorization: `Bearer ${userInfo.accessToken}` },
      });
      return response.data.data.gptResult;
    } catch (error) {
      console.error("Error generating AI comment:", error);
      throw error;
    }
  };

  const saveDiaryComment = async (diaryId, comment) => {
    try {
      await requestApi.post(
        `/diaries/${diaryId}/comments`,
        { comment },
        {
          headers: { Authorization: `Bearer ${userInfo.accessToken}` },
        }
      );
    } catch (error) {
      console.error("Error saving diary comment:", error);
      throw error;
    }
  };

  const createFullDiary = async (diaryData, imageData) => {
    try {
      const diaryId = await createDiary({
        title: diaryData.title,
        content: diaryData.content,
        diaryDate: diaryData.diaryDate,
      });

      const imageUrl = await generateAIImage({
        prompt: diaryData.content,
        gender: imageData.gender,
        age: imageData.age,
        hairStyle: imageData.hairStyle,
        clothes: imageData.clothes,
      });

      await saveDiaryImage(diaryId, imageUrl);

      const aiComment = await generateAIComment({
        username: userInfo.userName,
        prompt: diaryData.content,
      });

      await saveDiaryComment(diaryId, aiComment);

      return diaryId;
    } catch (error) {
      console.error("Error in createFullDiary process:", error);
      throw error;
    }
  };

  const getDiary = async (date) => {
    try {
      const response = await requestApi.get(`/diaries/${date}`, {
        headers: { Authorization: `Bearer ${userInfo.accessToken}` },
      });
      const { id, title, content, comment, image } = response.data.result;

      let imageUrl = null;
      if (image) {
        const imageResponse = await requestApi.get(`/diaries/${id}/images`, {
          headers: { Authorization: `Bearer ${userInfo.accessToken}` },
          responseType: "blob",
        });
        if (imageResponse.status === 200) {
          const blob = new Blob([imageResponse.data], {
            type: imageResponse.headers["content-type"],
          });
          imageUrl = URL.createObjectURL(blob);
        }
      }

      const diaryData = {
        title,
        content,
        comment: comment ? comment.comment : null,
        imageUrl,
      };
      console.log(diaryData.imageUrl);

      return diaryData;
    } catch (error) {
      console.error("Error fetching diary:", error);
      throw error;
    }
  };

  return { createFullDiary, getDiary };
};
