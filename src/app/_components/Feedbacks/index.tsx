'use client'

import React from 'react'
import { Button } from '../Button'
import classes from './index.module.scss'

const FeedbackForm = () => {
  return (
    <div>
      <Button
        appearance="primary"
        label="Add Feedback"
        className={classes.button}
        el="button"
        onClick={() => {
          console.log('ADDED')
        }}
      />
    </div>
  )
}

export default FeedbackForm
