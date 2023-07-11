# Package

Many inputs and table, you can use easily

## Button

### Props

isSubmit: boolean  
label: string

## Header

### Props

No Props

## DateTimeInput

### Props

minDate?: RawDateString  
maxDate?: RawDateString  
minTime?: RawTimeString  
maxTime?: RawTimeString  
valueDate?: string  
valueTime?: string  
handleChangeDate?: (value: string) => void  
handleChangeTime?: (value: string) => void  
label: string  
errorMessage: string | undefined

## SelectInput

### Props

id: string  
label?: string  
options: string[]  
required?: boolean  
width?: string  
value?: string  
handleChange?: (value: string) => void

## TextInput

### Props

id: string  
label?: string  
errorMessage?: string  
value?: string  
placeholder?: string  
handleChange?: (value: string) => void

## Modal

### Props

open: boolean  
title: string  
information?: string  
handleClose: () => void

## Table

### Props

haveASearchInput?: boolean  
entries?: string[]  
defaultNumberToshow?: number  
columnNameAndOrderToShow?: ColumnNameAndOrderToShowTypeArray | undefined  
onChange: (params: {
page: number  
numberOfElementToShow: number  
search: string  
sort: Sort  
}) => Promise<any>
