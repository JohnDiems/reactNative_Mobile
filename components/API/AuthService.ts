
import BaseAPIService from '../../components/API/BaseAPIService';

class AuthService extends BaseAPIService {
  async login(params: object): Promise<any> {
    return await this.request('/auth/login', 'POST', params);
  }

  async logout(): Promise<any> {
    return await this.request('/auth/logout', 'POST');
  }

  async forgotPassword(params: object): Promise<any> {
    return await this.request('/auth/forgot-password', 'POST', params);
  }

  async verifyResetPassword(params: object): Promise<any> {
    return await this.request('/auth/verify-reset-password', 'POST', params);
  }

  async resetPassword(params: object): Promise<any> {
    return await this.request('/auth/reset-password', 'POST', params);
  }
}

export const authService = new AuthService(); 
