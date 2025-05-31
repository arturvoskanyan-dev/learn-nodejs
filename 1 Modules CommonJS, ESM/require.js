/*

erb Node.js um grum enq require(x) => Node.js porcum e gtnel u nerbernel ayd modul@:Bayc inchpes e na da anum aha amboxj @ntacq@`

1. Ete X-y mijukayin module orinak` fs, path, http... 
.Dimum e anmijapes Node nersum exac modulnerin:
.Bernume da ev mijin@ stanum es aranc voreve file voronelu

2. Ete X sksvum e /
.Node ays depqum uxix gnum e ayd file hetevic

3. Ete X sksvum e ./, ../, .
.Node.js sksum e pntrel ayd file qo nerka folder-ic 
.Skzbum porcum e`

LOAD_AS_FILE(Y + X)
Փորձում է գտնել	Ի՞նչ է անում
./utils	եթե կա, բեռնում է
./utils.js	եթե կա, բեռնում է
./utils.json	բեռնում է որպես օբյեկտ
./utils.node	բեռնում է որպես C++ ադոն

LOAD_AS_DIRECTORY(Y + X)
ete file chkar hima tesnum e ardyoq da foldere
porcume hetevyal@`

1. ./utils/package.json -> main
2. ete chka kam sxal e`
./utils/index.js
./utils/index.json
./utils/index.node

ete ays amenic heto vochinch chgtav THROW "not found"

4. Ete X sksvum e #

.da kochvum e "package imports" -> hatuk dzeve anun talu
.pntrum e package.json-um "imports" dashtum
.Dra hamar petq e ESM ogtagorcenq kam unenanq hamapatasxan nastroyka

5. LOAD_PACKAGE_SELF

ete porcel enq nerbernel mer sepakan file mer file mijic

require('my-own-package')

.ete package.json-um ka "my-own-package" ev exports apa sa e pntrvum

6.LOAD_NODE_MODULES

ete voch mi ban chashxatec Node.js sksum e pntrel node_modules

Ինչպես է դա անում՝
Սկսում է քո ֆայլի դիրքից։

Փնտրում է այսպիսի ուղիներ․

./node_modules/X
../node_modules/X
../../node_modules/X
...
Յուրաքանչյուր դիրքում փորձում է՝

Փորձում է	Նպատակ
LOAD_PACKAGE_EXPORTS	Փաթեթի exports դաշտից ուղի
LOAD_AS_FILE(DIR/X)	Ֆայլ
LOAD_AS_DIRECTORY(DIR/X)	Պանակ

🔍 MAYBE_DETECT_AND_LOAD(X)
Եթե .js ֆայլն ինչ-որ ձևով չի նշել type: module կամ type: commonjs, ապա փորձ է արվում կռահել՝ CommonJS՞ է, թե՞ ECMAScript Module։

Verjum ete ays bolor qayleric mek@ chasxatec 

THROW "Cannot find module 'X'"

*/