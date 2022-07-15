interface Config {
  name: string,
  lastName?: string,
  fullName: string,
  age: number,
  school?: string,
}

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
