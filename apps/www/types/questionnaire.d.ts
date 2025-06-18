/// <reference types="react" />

declare module '~/types/questionnaire' {
  export interface Question {
    field_id: string
    label: string
    type: 'text' | 'email' | 'number' | 'select'
  }

  export type FormData = Record<Question['field_id'], string>
} 