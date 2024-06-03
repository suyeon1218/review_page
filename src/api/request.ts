import { AxiosResponse } from 'axios';
import apiClient from './apiClient';

export const GET = async <T>(path: string) => {
  try {
    const response: AxiosResponse<T> = await apiClient.get(path);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const POST = async <T>(path: string, data: T) => {
  try {
    const response: AxiosResponse<T> = await apiClient.post(path, data);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const PATCH = async <T>(path: string, data: Partial<T>) => {
  try {
    const response = await apiClient.put(path, data);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const DELETE = async (path: string) => {
  try {
    const response = await apiClient.delete(path);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
