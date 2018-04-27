import React from 'react'
import Link from 'gatsby-link'

import Bio from '../components/Bio/index'
import styles from '../pages/about-me.module.css'
console.log(styles)

const User = props =>
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>
        {props.username}
      </h2>
      <p className={styles.excerpt}>
        {props.excerpt}
      </p>
    </div>
  </div>

const AboutMe = () => (
  <div>
    <Bio>
      <h1>This is where my bio lives</h1>
      <p>It started early when I was young and I didn't know how to use computers</p>
      <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Bio>
  </div>
)

export default AboutMe
