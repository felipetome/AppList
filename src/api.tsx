
import axios from 'axios';

export interface DataType {
  id: string;
  title: string;
  description: string;
  type: string;
  totalLikes: number;
  comments: number;

}

export const fetchData = async (): Promise<DataType[]> => {
  try {
    const response = await axios.get<DataType[]>('https://8ca1-2804-7f7-e28b-d585-f93d-c71e-2f68-8692.ngrok-free.app/api/posts');
    console.log('veio')

    const sortedData = response.data.sort((a, b) => parseInt(b.id) - parseInt(a.id));

    return sortedData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};


export const updateLikes = async (postId: string, totalLikes: number): Promise<number | null> => {
  try {
    const response = await axios.put(`https://8ca1-2804-7f7-e28b-d585-f93d-c71e-2f68-8692.ngrok-free.app/api/posts/${postId}/likes`, {
      totalLikes: totalLikes,
    });
    console.log(totalLikes,response.data);
    return response.data.totalLikes;
  } catch (error) {
    console.error('Error updating likes:', error);
    return null;
  }
};



