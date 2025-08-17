import {getFullYear, getFooterCopy, getLatestNotification} from "./utils"
import { describe, expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import App from "./App"
import { Notifications } from "./Notifications.js"


test('year date todays are 2025', () => {
    expect(getFullYear()).toBe(2025)
})


test('testing if getFooterCopy return the right boolean value', () => {

    expect(getFooterCopy(false)).toBe('ALX main dashboard')
})

test('testing getlatestnotefication', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
})



test('rendering app without crashing ', () => {
    render(<App />);
})

test('rendering a div without app class header', () => {
    render(<App />);
    
    expect(document.querySelector(".App-header")).toBeInTheDocument();
})

test('rendering a div without app class body', () => {
    render(<App />);

    expect(document.querySelector(".App-body")).toBeInTheDocument();
})

test('rendering a div without app class footer', () => {
    render(<App />);

    expect(document.querySelector(".App-footer")).toBeInTheDocument();
})