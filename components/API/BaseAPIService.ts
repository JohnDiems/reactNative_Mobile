import AsyncStorage from '@react-native-async-storage/async-storage';
import APIError from '../API/APIError';
import { API_BASE_URL } from '@env';

class BaseAPIService {
  async request(url: string, method: string, params: object = {}): Promise<any> {
    const token = await AsyncStorage.getItem('_token');

    const fullUrl = `${API_BASE_URL}${url}`;

    let options: RequestInit = {
      method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };

    if (method === 'GET') {
      const queryString = new URLSearchParams(params as Record<string, string>).toString();
      url = queryString ? `${fullUrl}?${queryString}` : fullUrl;
    } else {
      options.body = JSON.stringify(params);
    }

    try {
      const response = await fetch(method === 'GET' ? url : fullUrl, options);
      const data = await response.json();

      if (!response.ok) {
        switch (response.status) {
          case 400:
          case 404:
          case 422:
          case 429:
            throw new APIError(data);
          case 401:
            this.revokeAccess();
            return;
          case 500:
            throw new APIError({
              message:
                'Server error. Please try again. If the problem persists, contact your system administrator',
            });
          default:
            throw new APIError({
              message:
                'Something went wrong. Please try again. If the problem persists, contact your system administrator',
            });
        }
      }

      return data;
    } catch (error: any) {
      if (error instanceof APIError) throw error;
      throw new APIError({ message: error.message || 'Unexpected error' });
    }
  }

  async revokeAccess() {
    await AsyncStorage.removeItem('_token');
    console.log('Access revoked. Redirect to login.');
  }
}

export default BaseAPIService;
