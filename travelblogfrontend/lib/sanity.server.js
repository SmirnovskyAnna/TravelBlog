import { createClient } from 'next-sanity'
import { config } from './config'

export const sanityClient = createClient(config)

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: 'skZvuzAgxBcliSDOGuKhobPeFwyfJehecR9dv3mfgap5KmEvqtgraiNaidgO2x0xqFQfeF5MVao4cE7POlMEXEjDvtVQ7fNmxwv5Xwrg3bnU6HF6FAznBbiKVgVTOEPX6CeCAsjIGVyldarffGbaMgPQ8scCYszKvVsMCtW32BNoiC9ygt17'
})

export const getClient = ( usePreview ) => usePreview ? previewClient : sanityClient