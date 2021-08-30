import PostRepository from '~/repositories/ImageRepositories'

export default ($axios) => ({
  image: PostRepository($axios),
})
