import React from 'react'
import { TextArea, TextField, Button } from '@radix-ui/themes';
const newIssue = () => {
  return (
    <div className='max-w-xl space-y-3'>
<TextField.Root placeholder="Title">
</TextField.Root>
<TextArea placeholder="Description" />
<Button>Submit New Issue</Button>
    </div>
  )
}

export default newIssue