//TaskForm.tsx://////////////////////////////////////////////////////////////
export const avatar: string =
  "https://s3-alpha-sig.figma.com/img/0e35/b8e1/c386fc03b862ed171fd63bb7292d7d01?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XgKAdpchdwMl5GoBumyHbTyjCxbHeCu-zj13qN8nFYSXAhOJXYeUIgV1z8hMJZvFuEj8Pca-37nHVpLy9taqaEL-M2nQBuP2QlYWjRvKpMUau~aKqoGNq~iQUxUJl3sPh~ULRq-pfhyOOCqphNAYhi-pqnNN0FapARZT9XDPuRzDXCWEuAia1OhHQfrR-OCSbM49FfuhQqebmrkq0C4z1qLamKQZ6r0nF~noqaZDWfUykakZ6ZAp55PDWqwUrnVSmB-K~iAJq2IrJEXTSz4B9XHhGLjtDvOdB4ppCcQjSUCo20NhbF0EjcWZCkNBsRk1yR0c-8i08ucvPjHHM4NywQ__";

export interface Task {
  description: string;
  shortDesc: string;
}

export const textTask: Task[] = [
  {
    description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
    استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
    در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،`,

    shortDesc: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
    استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
    در ستون و سطرآنچنان که لازم است`,
  },
];

//shareTask.tsx://ProjectTask.tsx////////////////////////////////////////////////////////////
export interface User {
  avatar: string;
  username: string;
  isCreated: boolean;
}

export const users: User[] = [
  {
    avatar:
      "https://s3-alpha-sig.figma.com/img/0e35/b8e1/c386fc03b862ed171fd63bb7292d7d01?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XgKAdpchdwMl5GoBumyHbTyjCxbHeCu-zj13qN8nFYSXAhOJXYeUIgV1z8hMJZvFuEj8Pca-37nHVpLy9taqaEL-M2nQBuP2QlYWjRvKpMUau~aKqoGNq~iQUxUJl3sPh~ULRq-pfhyOOCqphNAYhi-pqnNN0FapARZT9XDPuRzDXCWEuAia1OhHQfrR-OCSbM49FfuhQqebmrkq0C4z1qLamKQZ6r0nF~noqaZDWfUykakZ6ZAp55PDWqwUrnVSmB-K~iAJq2IrJEXTSz4B9XHhGLjtDvOdB4ppCcQjSUCo20NhbF0EjcWZCkNBsRk1yR0c-8i08ucvPjHHM4NywQ__",
    username: "user1",
    isCreated: true,
  },
  {
    avatar:
      "https://s3-alpha-sig.figma.com/img/0e35/b8e1/c386fc03b862ed171fd63bb7292d7d01?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XgKAdpchdwMl5GoBumyHbTyjCxbHeCu-zj13qN8nFYSXAhOJXYeUIgV1z8hMJZvFuEj8Pca-37nHVpLy9taqaEL-M2nQBuP2QlYWjRvKpMUau~aKqoGNq~iQUxUJl3sPh~ULRq-pfhyOOCqphNAYhi-pqnNN0FapARZT9XDPuRzDXCWEuAia1OhHQfrR-OCSbM49FfuhQqebmrkq0C4z1qLamKQZ6r0nF~noqaZDWfUykakZ6ZAp55PDWqwUrnVSmB-K~iAJq2IrJEXTSz4B9XHhGLjtDvOdB4ppCcQjSUCo20NhbF0EjcWZCkNBsRk1yR0c-8i08ucvPjHHM4NywQ__",
    username: "user2",
    isCreated: false,
  },
];

//commentLargeBox.tsx://////////////////////////////////////////////////////////////
export interface ListUsers {
  id: number;
  username: string;
}
export const listUsers: ListUsers[] = [
  { id: 1, username: "Tina" },
  { id: 2, username: "Mohammad" },
  { id: 3, username: "MohammadReza" },
];

//TagsList.tsx://////////////////////////////////////////////////////////////
export interface TagsList {
  id: number;
  title: string;
  color: string;
}
export const tagsList: TagsList[] = [
  {
    id: 1,
    title: "درس",
    color: "blue",
  },
  {
    id: 2,
    title: "کار",
    color: "violet",
  },
  {
    id: 3,
    title: "جلسه",
    color: "red",
  },
  {
    id: 4,
    title: "درسنامه",
    color: "yellow",
  },
];

//profiel folder//////////////////////////////////////////////////////////
export interface account {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  thumbnail: string;
}

export const accounts: account[] = [
  {
    id: 1,
    username: "cnRc+-rErY7GJ",
    email: "user@example.com",
    first_name: "string",
    last_name: "string",
    phone_number: "17328916613",
    thumbnail: "string",
  },
  {
    id: 2,
    username: "safari",
    email: "safari@gmail.com",
    first_name: "آرزو",
    last_name: "صفری",
    phone_number: "09151590936",
    thumbnail: "string",
  },
];

//NewHeader.tsx://////////////////////////////////////////////////////////////
export interface ProjectList {
  id: number;
  title: string;
}

export const projectList: ProjectList[] = [
  {
    id: 1,
    title: "پروژه اول",
  },
  {
    id: 2,
    title: "پروژه دوم",
  },
  {
    id: 3,
    title: "پروژه سوم",
  },
  {
    id: 4,
    title: "پروژه چهارم",
  },
];

//WorkspacesView.tsx///////////////////////////////////////////////////
export interface WorkspacesList {
  title: string;
  projects: string[];
  color: string;
}

export const workspacesList: WorkspacesList[] = [
  {
    title: "درس مدیریت پروژه",
    projects: [
      "پروژه اول",
      "پروژه دوم",
      "پروژه سوم",
      "پروژه چهارم",
      "پروژه پنجم",
    ],
    color: "green",
  },
  {
    title: "کارهای شخصی",
    projects: ["پروژه اول", "پروژه دوم", "پروژه سوم"],
    color: "yellow",
  },
  {
    title: "درس کامپایلر",
    projects: [],
    color: "blue",
  },
  {
    title: "درس طراحی الگوریتم",
    projects: ["پروژه اول", "پروژه دوم", "پروژه سوم", "پروژه چهارم"],
    color: "blue",
  },
  {
    title: "درس سیستم عامل",
    projects: [],
    color: "yellow",
  },
];
