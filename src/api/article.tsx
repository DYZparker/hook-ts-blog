import request from '../utils/request'

interface ArticleListPayload {
  page: Number
  size: Number
  search: {tags: String | undefined}
}

export function getArticleListApi(payload: ArticleListPayload) {
  return request({
    url: '/article/list',
    method: 'post',
    data: {
      payload
    }
  })
}

export function getArticleApi(id: string | undefined) {
  return request({
    url: '/article/id',
    method: 'post',
    data: {
      id
    }
  })
}
