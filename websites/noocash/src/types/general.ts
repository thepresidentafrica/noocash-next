import  pkg from '../../package.json'

const {name, version} = pkg
export {name as appName,version as appVersion}

export declare type ICredentialInputs = {
    email: string
    password: string
}

export declare type NoocashResponse = {
    success: boolean
    error?: string
    message?: string
}