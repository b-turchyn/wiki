---
tags:
  - Angular
  - Framework
---

# Angular

## Making a Directive Input Required

([source
 information](https://stackoverflow.com/q/35528395))

Options:

1. Add the inputs as part of a selector
   ```ts
   @Component({
     selector: 'app-directive[a]'
   })
   ```
2. Check required fields during `ngOnInit()` and `ngOnChanges()`
   ```ts
   @Component({})
   export class MyComponent implements OnInit, OnChanges {
     @Input() a: string;
     @Input() b: number;

     ngOnInit(): void {
      this.checkRequiredFields();
     }

     ngOnChanges(): void {
      this.checkRequiredFields();
     }

     checkRequiredFields(): void {
       this.checkField('a', this.a);
       this.checkField('b', this.b);
     }

     checkField(name: string, input: any): void {
       if (input === null | input === undefined) {
         throw new Error(`Attribute '${name}' is required`);
       }
     }
   }
   ```
3. Create a `Required` decorator
   ```ts
   function Required(target: object, propertyKey: string) {
     Object.defineProperty(target, propertyKey, {
       get() {
         throw new Error(`Attribute ${propertyKey} is required`);
       },
       set(value) {
         Object.defineProperty(target, propertyKey, {
           value,
           writable: true,
           configurable: true,
         });
       },
       configurable: true
     });
   }
   ```
   ...then assign the decorator to the field.
   ```ts
   @Input @Required a: string;
   ```
