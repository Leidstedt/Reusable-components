import React from 'react'
import { Card } from 'lib/Card'
import { Button } from 'lib/Button'

export const App = () => {
  return (
    <div>
      <Card
        coverImage="http://place-puppy.com/500x300"
        thumbnailUrl="http://place-puppy.com/100x100"
        title="Title"
        secondaryText="Secondary text"
        supportingText="Supporting text">
      </Card>
      <Button/>
    </div>
  )
}
