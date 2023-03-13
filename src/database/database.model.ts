// Interface Model Card - Required

type Tecno = {
  name: string,
  stack: string,
  docs: string
}

export interface DataBase {
  technologies: Array<Tecno>;
  title: string;
  description: string,
  image: string;
  source: string;
  demo: string
  id: number | string;
}
