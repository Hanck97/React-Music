/*
 * @Author: Hancock Tong
 * @Date: 2018-05-14 15:44:49
 */
import React, { Component } from 'react'
import HomeHeader from './HomeHeader'
import Recommend from './Recommend'
import Nav from './Nav'


export default class extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <HomeHeader />
        <Nav />
        <Recommend/>
      </div>
    )
  }
}
