type Post = {
  title: string;
  author?: string;
}

export type addPost = (post: Post) => Promise<any>;

export type getValidationSchema = () => object;

export type usePosts = () => {
  getValidationSchema: getValidationSchema;
  addPost: addPost;
};