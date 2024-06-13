export interface TokenType {
  token: string;
}

export interface AuthType {
  email: string;
  password: string;
}

export interface ButtonType {
  title: string;
  disabled: boolean;
  type: 'submit' | 'reset' | 'button';
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ErrorProps {
  title: string;
}

export interface InputType {
  name?: string;
  type?: string;
  placeholder?: string;
  title?: string;
  register?: any;
  formError?: string;
}

export interface AppType {
  id: string;
  token: string;
}

export interface PaginationType {
  page: number;
  onClickBack: () => void;
  onClickForward: () => void;
  totalPage: number;
  defaultPage: number;
}

export interface UserData {
  id: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
  like?: boolean | undefined;
}

export interface ResponseType {
  token?: string | undefined;
  error?: string | undefined;
}
