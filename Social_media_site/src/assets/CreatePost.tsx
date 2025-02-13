import { Form } from 'react-router-dom'
import { Input } from '@mantine/core';
import { FileInput } from '@mantine/core';

import classes from './createpost.module.css'

export default function () {
    return (
        <div className={classes.postcontainer}>
            <div className={classes.post}>
                <div className={classes.toppost}>
                    <Input placeholder="Post Title" />
                </div>
                <div className={classes.middlepost}>
                    <FileInput
                        label="Upload Image"
                        description="Choose an image from your library!"
                        placeholder="img-name"
                    />
                </div>
                <div className={classes.bottompost}>
                    <Input placeholder="Post Description" />
                </div>
            </div>
        </div>
    )
}