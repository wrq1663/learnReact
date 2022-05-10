import React, { PureComponent } from 'react'
import CommentInput from './CommentInput'

import { Comment, Tooltip, Avatar } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

import './style.less'

export default class Commentall extends PureComponent {
  constructor() {
    super();
    this.state = {
      itemList: []
    }
  }
  addList(itemList) {
    this.setState({
      itemList: [...this.state.itemList, itemList]
    })
  }
  delItem(index) {
    this.setState({
      itemList: this.state.itemList.filter((item, indey) => index !== indey)
    })
  }
  render() {
    return (
      <div className='comment-wrap'>
        {/* 展示评论区 */}
        {
          this.state.itemList.map((item, index) => {
            return (
              <Comment
                key={item.id}
                // actions={actions}
                author={<a>{item.nickname}</a>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={<p>{item.item}</p>}
                datetime={<span>{item.dateTime}</span>}
                actions={[
                  <a href='/#' onClick={e => this.delItem(index)}>删除</a>
                ]}
              />
            )
          })
        }

        {/* 评论 */}
        <CommentInput event={this.addList.bind(this)} />
      </div>
    )
  }
}
