// axios
const posts = [
  { id: 1, title: "제목1", content: "내용1", createdAt: "2020-01-01" },
  { id: 2, title: "제목2", content: "내용2", createdAt: "2020-02-02" },
  { id: 3, title: "제목3", content: "내용3", createdAt: "2020-03-03" },
  { id: 4, title: "제목4", content: "내용4", createdAt: "2020-04-04" },
  { id: 5, title: "제목5", content: "내용5", createdAt: "2020-05-05" },
  { id: 6, title: "제목6", content: "내용6", createdAt: "2020-06-06" },
];
export function getPosts() {
  return posts;
}
