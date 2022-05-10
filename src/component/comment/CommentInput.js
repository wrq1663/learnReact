import React, { PureComponent } from 'react'
import { Input, Button } from 'antd';
import moment from 'moment';
const { TextArea } = Input;

export default class CommentInput extends PureComponent {
  constructor() {
    super();
    this.state = {
      loadings: [],
      inputVl: 123,
      commentItem:{
        id:Date.now(),
        nickname:'wrq',
        item:'',
        dateTime:moment().format()
      }
    };
  }
  enterLoading(index) {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;
        return {
          loadings: newLoadings,
          commentItem: {
            id:Date.now(),
            nickname:'wrq',
            item:this.state.inputVl,
            dateTime:moment().format('YYYY-MM-DD')
          }
        };
      },()=>{
        this.props.event(this.state.commentItem);
      });
      this.setState({
        inputVl:''
      })
    }, 1000);
  };
  handleChange(e) {
    this.setState({
      inputVl: e.target.value
    })
  }
  render() {
    const { loadings } = this.state
    return (
      <div className="inputArea">
        <TextArea rows={4} onChange={e => this.handleChange(e)} value={this.state.inputVl} />
        <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
          提交评论
        </Button>
      </div>
    )
  }

}
