import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useDiv6Cb() {
	const onClick = useCallback(callbackFactory("Div6", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useButton2Cb() {
	const onClick = useCallback(callbackFactory("Button2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage1Cb() {
	const onClick = useCallback(callbackFactory("Image1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDiv4Cb() {
	const onClick = useCallback(callbackFactory("Div4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox3Cb() {
	const onClick = useCallback(callbackFactory("TextBox3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useInput2Cb() {
	const onChange = useCallback(callbackFactory("Input2", "Home", "/", "onChange", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "value"
      ]
    }
  ]
}), [])
	const onPressEnter = useCallback(callbackFactory("Input2", "Home", "/", "onPressEnter", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onChange,onPressEnter }
}
export function useRadio1Cb() {
	const onChange = useCallback(callbackFactory("Radio1", "Home", "/", "onChange", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "checked"
      ]
    }
  ]
}), [])
	return { onChange }
}
export function useDiv8Cb() {
	const onClick = useCallback(callbackFactory("Div8", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useRadio2Cb() {
	const onChange = useCallback(callbackFactory("Radio2", "Home", "/", "onChange", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "checked"
      ]
    }
  ]
}), [])
	return { onChange }
}
export function useRadio3Cb() {
	const onChange = useCallback(callbackFactory("Radio3", "Home", "/", "onChange", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "checked"
      ]
    }
  ]
}), [])
	return { onChange }
}
export function useRadio4Cb() {
	const onChange = useCallback(callbackFactory("Radio4", "Home", "/", "onChange", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "checked"
      ]
    }
  ]
}), [])
	return { onChange }
}
export function useRadio5Cb() {
	const onChange = useCallback(callbackFactory("Radio5", "Home", "/", "onChange", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "checked"
      ]
    }
  ]
}), [])
	return { onChange }
}
export function useButton4Cb() {
	const onClick = useCallback(callbackFactory("Button4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox10Cb() {
	const onClick = useCallback(callbackFactory("TextBox10", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}