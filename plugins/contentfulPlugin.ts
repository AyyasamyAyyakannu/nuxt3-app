import {createClient} from 'contentful'

const config = {
    space: 'a7hvy8sclsq6',
    accessToken: 'U-NzRsrBNstwLZ9uYBEZcINmitwfL8sAMNkPnJFx0No'
};

export default defineNuxtPlugin(() => {
    return {
        provide: {
            client :createClient({
                space: config.space,
                accessToken: config.accessToken
            })
        }
    }
})

