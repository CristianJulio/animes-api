export interface IUser {
  id: number
  first_name: string;
  second_name: string | null;
  first_lastname: string;
  second_lastname: string;
  username: string;
  picture: string | null;
}