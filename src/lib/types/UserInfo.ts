export interface UserInfoProps {
  children: React.ReactNode;
  label: string;
  name?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string | number) => void;
}