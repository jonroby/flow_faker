module.exports = {
  "description":"General component description.",
  "props":{
    "primitive":{
      "flowType":{ "name":"number" },
      "required":true,
      "description":"Description of prop \"foo\"."
    },
    "literalsAndUnion":{
      "flowType":{
        "name":"union",
        "raw":"'string' | 'otherstring' | number",
        "elements":[
          { "name":"literal", "value":"'string'" },
          { "name":"literal", "value":"'otherstring'" },
          { "name":"number" }
        ]
      },
      "required":true,
      "description":"Description of prop \"bar\"."
    },
    "arr":{
      "flowType":{
        "name":"Array",
        "elements":[
          { "name":"any" }
        ],
        "raw":"Array<any>"
      },
      "required":true
    },
    "func":{
      "flowType":{
        "name":"signature",
        "type":"function",
        "raw":"(value: string) => void",
        "signature":{
          "arguments":[
            { "name":"value", "type":{ "name":"string" } }
          ],
          "return":{ "name":"void" }
        }
      },
      "required":false
    },
    "obj":{
      "flowType":{
        "name":"signature",
        "type":"object",
        "raw":"{ subvalue: ?boolean }",
        "signature":{
          "properties":[
            {
              "key":"subvalue",
              "value":{
                "name":"boolean",
                "nullable":true,
                "required":true
              }
            }
          ]
        }
      },
      "required":false
    }
  }
}
