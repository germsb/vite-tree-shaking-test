### Vue components seems to have a problem with vite Tree shaking


##### [reproduction](https://github.com/germsb/vite-tree-shaking-test) (monorepo)



```console
require npm 7 or whatever support workspaces
$ git clone https://github.com/germsb/vite-tree-shaking-test.git
$ cd vite-tree-shaking-test
$ npm install
$ cd vite-app
$ npm run build 
open stats.html in your browser
$ google-chrome ./dist/stats.html
```

  vite-lib package [export](https://github.com/germsb/vite-tree-shaking-test/blob/master/vite-lib/src/exports.ts) 
 * 4 vue components:  
   * `SimpleComp`  
   * `SimpleComp2`
   * `MyButton`   
    import and use `myFunc` (src/utils/testFunc.ts)  
    import and use `addHours` module from `date-fns` (npm package).
   * `Tooltip`   
    import and use `tippy.js` (npm package).  


* and one function: 
   * `add2Months` (src/utils/testExport.ts)  
    import and use `addMonths` module from `date-fns` (npm package).

 
vite-app package consume vite-lib as dependency in [App.vue](https://github.com/germsb/vite-tree-shaking-test/blob/master/vite-app/src/App.vue)
* only `SimpleComp` is imported.
 
 

#### Expected result  
After build vite-app package, the bundle should only contain vite-lib `SimpleComp` code.

#### Result
The bundle contain `SimpleComp` but also `Tooltip` component and `tippy.js` dependency, `MyButton` component and its dependencies: `testFunc.ts` file and `addHours` part of `date-fns` package. (~35 kb of unused code) See stats.html.

#### Finally
Tree-shake vanilla js work as expected.  
With vue SFC it becomes inconsistent, apparently no worries in the case of a simple component, but if it import library or somethinks from other file, the set will be included to the bundle in all cases.