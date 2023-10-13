export type Menu = {
  links: { name: string; href: string, current: boolean }[];
};

export type MyAccount = {
  info: { photo: string, name: string, email: string }
}