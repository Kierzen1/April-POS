(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Table;
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = TableHeader;
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TableBody;
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = TableFooter;
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = TableRow;
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = TableHead;
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c12 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c13 = TableCell;
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c15 = TableCaption;
TableCaption.displayName = "TableCaption";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "Table$React.forwardRef");
__turbopack_context__.k.register(_c1, "Table");
__turbopack_context__.k.register(_c2, "TableHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "TableHeader");
__turbopack_context__.k.register(_c4, "TableBody$React.forwardRef");
__turbopack_context__.k.register(_c5, "TableBody");
__turbopack_context__.k.register(_c6, "TableFooter$React.forwardRef");
__turbopack_context__.k.register(_c7, "TableFooter");
__turbopack_context__.k.register(_c8, "TableRow$React.forwardRef");
__turbopack_context__.k.register(_c9, "TableRow");
__turbopack_context__.k.register(_c10, "TableHead$React.forwardRef");
__turbopack_context__.k.register(_c11, "TableHead");
__turbopack_context__.k.register(_c12, "TableCell$React.forwardRef");
__turbopack_context__.k.register(_c13, "TableCell");
__turbopack_context__.k.register(_c14, "TableCaption$React.forwardRef");
__turbopack_context__.k.register(_c15, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-card text-card-foreground shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 48,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data:76e8b4 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProducts",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00df78ebb5383cb59f76e1fec79847930b21c1e633":"getProducts"},"src/lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00df78ebb5383cb59f76e1fec79847930b21c1e633", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getProducts");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IGFkbWluRGIsIGFkbWluQXV0aCB9IGZyb20gXCJAL2xpYi9maXJlYmFzZS1hZG1pblwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5cclxuY29uc3QgcmVnaXN0ZXJTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICBuYW1lOiB6LnN0cmluZygpLm1pbigyLCBcIk5hbWUgaXMgdG9vIHNob3J0XCIpLFxyXG4gICAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoXCJJbnZhbGlkIGVtYWlsXCIpLFxyXG4gICAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYsIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIiksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkID0gcmVnaXN0ZXJTY2hlbWEuc2FmZVBhcnNlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogdmFsaWRhdGVkLmVycm9yLmlzc3Vlc1swXT8ubWVzc2FnZSB8fCBcIlZhbGlkYXRpb24gZmFpbGVkXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHVzZXIgZXhpc3RzIGluIEZpcmVzdG9yZVxyXG4gICAgICAgIGNvbnN0IHVzZXJTbmFwID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidXNlcnNcIikud2hlcmUoXCJlbWFpbFwiLCBcIj09XCIsIGVtYWlsKS5nZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyU25hcC5lbXB0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogXCJVc2VyIGFscmVhZHkgZXhpc3RzXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgdXNlciBjb3VudCBmb3Igcm9sZSBhc3NpZ25tZW50XHJcbiAgICAgICAgY29uc3QgdXNlcnNTbmFwID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuY291bnQoKS5nZXQoKTtcclxuICAgICAgICBjb25zdCB1c2VyQ291bnQgPSB1c2Vyc1NuYXAuZGF0YSgpLmNvdW50O1xyXG5cclxuICAgICAgICBjb25zdCByb2xlID0gdXNlckNvdW50ID09PSAwID8gXCJBRE1JTlwiIDogXCJTVEFGRlwiO1xyXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdXNlckNvdW50ID09PSAwO1xyXG5cclxuICAgICAgICAvLyAxLiBDcmVhdGUgaW4gRmlyZWJhc2UgQXV0aFxyXG4gICAgICAgIGNvbnN0IGF1dGhVc2VyID0gYXdhaXQgYWRtaW5BdXRoLmNyZWF0ZVVzZXIoe1xyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQsIC8vIFdlIHVzZSByYXcgcGFzc3dvcmQgZm9yIEZpcmViYXNlIEF1dGhcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IG5hbWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDIuIENyZWF0ZSBpbiBGaXJlc3RvcmVcclxuICAgICAgICBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aFVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLCAvLyBLZWVwIGZvciBOZXh0QXV0aC9iY3J5cHQgY29tcGF0aWJpbGl0eSBpZiBuZWVkZWRcclxuICAgICAgICAgICAgcm9sZSxcclxuICAgICAgICAgICAgaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWdpc3RyYXRpb24gZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFkbWluQ3JlYXRlVXNlclNjaGVtYSA9IHoub2JqZWN0KHtcclxuICAgIG5hbWU6IHouc3RyaW5nKCkubWluKDIsIFwiTmFtZSBpcyB0b28gc2hvcnRcIiksXHJcbiAgICBlbWFpbDogei5zdHJpbmcoKS5lbWFpbChcIkludmFsaWQgZW1haWxcIiksXHJcbiAgICBwYXNzd29yZDogei5zdHJpbmcoKS5taW4oNiwgXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyc1wiKSxcclxuICAgIHJvbGU6IHouZW51bShbXCJBRE1JTlwiLCBcIlNUQUZGXCJdKSxcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRtaW5DcmVhdGVVc2VyKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiU1RBRkZcIjtcclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZWQgPSBhZG1pbkNyZWF0ZVVzZXJTY2hlbWEuc2FmZVBhcnNlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogdmFsaWRhdGVkLmVycm9yLmlzc3Vlc1swXT8ubWVzc2FnZSB8fCBcIlZhbGlkYXRpb24gZmFpbGVkXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJTbmFwID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidXNlcnNcIikud2hlcmUoXCJlbWFpbFwiLCBcIj09XCIsIGVtYWlsKS5nZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyU25hcC5lbXB0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogXCJVc2VyIGFscmVhZHkgZXhpc3RzXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcclxuXHJcbiAgICAgICAgLy8gMS4gQ3JlYXRlIGluIEZpcmViYXNlIEF1dGhcclxuICAgICAgICBjb25zdCBhdXRoVXNlciA9IGF3YWl0IGFkbWluQXV0aC5jcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogbmFtZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gMi4gQ3JlYXRlIGluIEZpcmVzdG9yZVxyXG4gICAgICAgIGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoVXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHJvbGUsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQWRtaW4gdXNlciBjcmVhdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVXNlciBNYW5hZ2VtZW50XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VycygpIHtcclxuICAgIGNvbnN0IHNuYXAgPSBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKS5nZXQoKTtcclxuICAgIHJldHVybiBzbmFwLmRvY3MubWFwKGRvYyA9PiAoe1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICBjcmVhdGVkQXQ6IGRvYy5kYXRhKCkuY3JlYXRlZEF0Py50b0RhdGUoKSxcclxuICAgICAgICB1cGRhdGVkQXQ6IGRvYy5kYXRhKCkudXBkYXRlZEF0Py50b0RhdGUoKSxcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZVVzZXJBY3RpdmF0aW9uKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkb2NSZWYgPSBhZG1pbkRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlcklkKTtcclxuICAgIGNvbnN0IGRvYyA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcclxuXHJcbiAgICBpZiAoIWRvYy5leGlzdHMpIHJldHVybiB7IGVycm9yOiBcIlVzZXIgbm90IGZvdW5kXCIgfTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50U3RhdHVzID0gZG9jLmRhdGEoKT8uaXNBY3RpdmU7XHJcbiAgICBhd2FpdCBkb2NSZWYudXBkYXRlKHsgaXNBY3RpdmU6ICFjdXJyZW50U3RhdHVzIH0pO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBGaXJlYmFzZSBBdXRoIHN0YXR1cyBpZiBuZWVkZWQgKG9wdGlvbmFsKVxyXG4gICAgYXdhaXQgYWRtaW5BdXRoLnVwZGF0ZVVzZXIodXNlcklkLCB7IGRpc2FibGVkOiBjdXJyZW50U3RhdHVzIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuLy8gUHJvZHVjdCBNYW5hZ2VtZW50XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcclxuICAgIGNvbnN0IHNuYXAgPSBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKS5vcmRlckJ5KFwidXBkYXRlZEF0XCIsIFwiZGVzY1wiKS5nZXQoKTtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gc25hcC5kb2NzLm1hcChkb2MgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgY3JlYXRlZEF0OiBkb2MuZGF0YSgpLmNyZWF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICAgICAgdXBkYXRlZEF0OiBkb2MuZGF0YSgpLnVwZGF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHNvbGQgY291bnQgZnJvbSB0cmFuc2FjdGlvbnNcclxuICAgIGNvbnN0IHR4SXRlbXNTbmFwID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidHJhbnNhY3Rpb25faXRlbXNcIikuZ2V0KCk7XHJcbiAgICBjb25zdCBzb2xkQ291bnRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XHJcblxyXG4gICAgdHhJdGVtc1NuYXAuZG9jcy5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgc29sZENvdW50c1tpdGVtLnByb2R1Y3RJZF0gPSAoc29sZENvdW50c1tpdGVtLnByb2R1Y3RJZF0gfHwgMCkgKyBpdGVtLnF1YW50aXR5O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcChwID0+ICh7XHJcbiAgICAgICAgLi4ucCxcclxuICAgICAgICBwcmljZTogTnVtYmVyKChwIGFzIGFueSkucHJpY2UpLFxyXG4gICAgICAgIHNvbGRDb3VudDogc29sZENvdW50c1twLmlkXSB8fCAwXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb3dTdG9ja0NvdW50KCkge1xyXG4gICAgY29uc3Qgc25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpLmdldCgpO1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBzbmFwLmRvY3MubWFwKGRvYyA9PiAoe1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgbmFtZTogZG9jLmRhdGEoKS5uYW1lLFxyXG4gICAgICAgIHN0b2NrOiBkb2MuZGF0YSgpLnN0b2NrLFxyXG4gICAgICAgIGxvd1N0b2NrVGhyZXNob2xkOiBkb2MuZGF0YSgpLmxvd1N0b2NrVGhyZXNob2xkIHx8IDUsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgbG93U3RvY2tJdGVtcyA9IHByb2R1Y3RzLmZpbHRlcihwID0+IHAuc3RvY2sgPD0gcC5sb3dTdG9ja1RocmVzaG9sZCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvdW50OiBsb3dTdG9ja0l0ZW1zLmxlbmd0aCxcclxuICAgICAgICBpdGVtczogbG93U3RvY2tJdGVtc1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RCeUJhcmNvZGUoYmFyY29kZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB0cmltbWVkQmFyY29kZSA9IGJhcmNvZGUudHJpbSgpO1xyXG4gICAgY29uc3Qgc25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpLndoZXJlKFwiYmFyY29kZVwiLCBcIj09XCIsIHRyaW1tZWRCYXJjb2RlKS5nZXQoKTtcclxuXHJcbiAgICBpZiAoc25hcC5lbXB0eSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgZG9jID0gc25hcC5kb2NzWzBdO1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgY3JlYXRlZEF0OiBkb2MuZGF0YSgpLmNyZWF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICAgICAgdXBkYXRlZEF0OiBkb2MuZGF0YSgpLnVwZGF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBzb2xkIGNvdW50XHJcbiAgICBjb25zdCB0eEl0ZW1zU25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInRyYW5zYWN0aW9uX2l0ZW1zXCIpLndoZXJlKFwicHJvZHVjdElkXCIsIFwiPT1cIiwgZG9jLmlkKS5nZXQoKTtcclxuICAgIGNvbnN0IHNvbGRDb3VudCA9IHR4SXRlbXNTbmFwLmRvY3MucmVkdWNlKChzdW0sIGQpID0+IHN1bSArIGQuZGF0YSgpLnF1YW50aXR5LCAwKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgcHJpY2U6IE51bWJlcigocHJvZHVjdCBhcyBhbnkpLnByaWNlKSxcclxuICAgICAgICBzb2xkQ291bnRcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cHNlcnRQcm9kdWN0KGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgeyBpZCwgYmFyY29kZSwgbmFtZSwgcHJpY2UsIHN0b2NrLCBsb3dTdG9ja1RocmVzaG9sZCwgY2F0ZWdvcnksIGltYWdlIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgcGFyc2VkUHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlKSB8fCAwO1xyXG4gICAgY29uc3QgcGFyc2VkU3RvY2sgPSBwYXJzZUludChzdG9jaykgfHwgMDtcclxuICAgIGNvbnN0IHBhcnNlZFRocmVzaG9sZCA9IHBhcnNlSW50KGxvd1N0b2NrVGhyZXNob2xkKSB8fCA1O1xyXG5cclxuICAgIGNvbnN0IGZpcmVzdG9yZURhdGEgPSB7XHJcbiAgICAgICAgYmFyY29kZSxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHByaWNlOiBwYXJzZWRQcmljZSxcclxuICAgICAgICBzdG9jazogcGFyc2VkU3RvY2ssXHJcbiAgICAgICAgbG93U3RvY2tUaHJlc2hvbGQ6IHBhcnNlZFRocmVzaG9sZCxcclxuICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpLmRvYyhpZCkudXBkYXRlKGZpcmVzdG9yZURhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKS5hZGQoe1xyXG4gICAgICAgICAgICAuLi5maXJlc3RvcmVEYXRhLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdChpZDogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKS5kb2MoaWQpLmRlbGV0ZSgpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG4vLyBUcmFuc2FjdGlvbiBNYW5hZ2VtZW50XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb21wbGV0ZVNhbGUoY2FzaGllcklkOiBzdHJpbmcsIGl0ZW1zOiBhbnlbXSwgdG90YWw6IG51bWJlcikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBGaXJlc3RvcmUgVHJhbnNhY3Rpb25cclxuICAgICAgICBhd2FpdCBhZG1pbkRiLnJ1blRyYW5zYWN0aW9uKGFzeW5jICh0cmFuc2FjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0eFJlZiA9IGFkbWluRGIuY29sbGVjdGlvbihcInRyYW5zYWN0aW9uc1wiKS5kb2MoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDEuIENyZWF0ZSBUcmFuc2FjdGlvblxyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5zZXQodHhSZWYsIHtcclxuICAgICAgICAgICAgICAgIGNhc2hpZXJJZCxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBOdW1iZXIodG90YWwpLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIDIuIENyZWF0ZSBJdGVtcyBhbmQgVXBkYXRlIFN0b2Nrc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1SZWYgPSBhZG1pbkRiLmNvbGxlY3Rpb24oXCJ0cmFuc2FjdGlvbl9pdGVtc1wiKS5kb2MoKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnNldChpdGVtUmVmLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25JZDogdHhSZWYuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiBpdGVtLnByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZUF0VGltZTogTnVtYmVyKGl0ZW0ucHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFJlZiA9IGFkbWluRGIuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpLmRvYyhpdGVtLnByb2R1Y3RJZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0RG9jID0gYXdhaXQgdHJhbnNhY3Rpb24uZ2V0KHByb2R1Y3RSZWYpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0RG9jLmV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdG9jayA9IHByb2R1Y3REb2MuZGF0YSgpPy5zdG9jayB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnVwZGF0ZShwcm9kdWN0UmVmLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrOiBjdXJyZW50U3RvY2sgLSBpdGVtLnF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTYWxlIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNvbXBsZXRlIHNhbGVcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VHJhbnNhY3Rpb25zKCkge1xyXG4gICAgY29uc3Qgc25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInRyYW5zYWN0aW9uc1wiKS5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKS5nZXQoKTtcclxuICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgZG9jIG9mIHNuYXAuZG9jcykge1xyXG4gICAgICAgIGNvbnN0IHR4RGF0YSA9IGRvYy5kYXRhKCk7XHJcblxyXG4gICAgICAgIC8vIEZldGNoIENhc2hpZXJcclxuICAgICAgICBjb25zdCBjYXNoaWVyRG9jID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHR4RGF0YS5jYXNoaWVySWQpLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGNhc2hpZXIgPSBjYXNoaWVyRG9jLmV4aXN0cyA/IHsgaWQ6IGNhc2hpZXJEb2MuaWQsIC4uLmNhc2hpZXJEb2MuZGF0YSgpIH0gOiBudWxsO1xyXG5cclxuICAgICAgICAvLyBGZXRjaCBJdGVtc1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zU25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInRyYW5zYWN0aW9uX2l0ZW1zXCIpLndoZXJlKFwidHJhbnNhY3Rpb25JZFwiLCBcIj09XCIsIGRvYy5pZCkuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtRG9jIG9mIGl0ZW1zU25hcC5kb2NzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EYXRhID0gaXRlbURvYy5kYXRhKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3REb2MgPSBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKS5kb2MoaXRlbURhdGEucHJvZHVjdElkKS5nZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3REb2MuZXhpc3RzID8geyBpZDogcHJvZHVjdERvYy5pZCwgLi4ucHJvZHVjdERvYy5kYXRhKCkgfSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIC4uLml0ZW1EYXRhLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW1Eb2MuaWQsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJhbnNhY3Rpb25zLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAuLi50eERhdGEsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogdHhEYXRhLmNyZWF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICAgICAgICAgIGNhc2hpZXIsXHJcbiAgICAgICAgICAgIGl0ZW1zXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zYWN0aW9ucztcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtSQWlKc0Isd0xBQUEifQ==
}),
"[project]/src/lib/data:6f0b56 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "upsertProduct",
    ()=>$$RSC_SERVER_ACTION_7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40eea97e91cf7ed8cacdab14034cf02133cea0b866":"upsertProduct"},"src/lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40eea97e91cf7ed8cacdab14034cf02133cea0b866", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "upsertProduct");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IGFkbWluRGIsIGFkbWluQXV0aCB9IGZyb20gXCJAL2xpYi9maXJlYmFzZS1hZG1pblwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5cclxuY29uc3QgcmVnaXN0ZXJTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICBuYW1lOiB6LnN0cmluZygpLm1pbigyLCBcIk5hbWUgaXMgdG9vIHNob3J0XCIpLFxyXG4gICAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoXCJJbnZhbGlkIGVtYWlsXCIpLFxyXG4gICAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYsIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIiksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkID0gcmVnaXN0ZXJTY2hlbWEuc2FmZVBhcnNlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogdmFsaWRhdGVkLmVycm9yLmlzc3Vlc1swXT8ubWVzc2FnZSB8fCBcIlZhbGlkYXRpb24gZmFpbGVkXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHVzZXIgZXhpc3RzIGluIEZpcmVzdG9yZVxyXG4gICAgICAgIGNvbnN0IHVzZXJTbmFwID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidXNlcnNcIikud2hlcmUoXCJlbWFpbFwiLCBcIj09XCIsIGVtYWlsKS5nZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyU25hcC5lbXB0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogXCJVc2VyIGFscmVhZHkgZXhpc3RzXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgdXNlciBjb3VudCBmb3Igcm9sZSBhc3NpZ25tZW50XHJcbiAgICAgICAgY29uc3QgdXNlcnNTbmFwID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuY291bnQoKS5nZXQoKTtcclxuICAgICAgICBjb25zdCB1c2VyQ291bnQgPSB1c2Vyc1NuYXAuZGF0YSgpLmNvdW50O1xyXG5cclxuICAgICAgICBjb25zdCByb2xlID0gdXNlckNvdW50ID09PSAwID8gXCJBRE1JTlwiIDogXCJTVEFGRlwiO1xyXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdXNlckNvdW50ID09PSAwO1xyXG5cclxuICAgICAgICAvLyAxLiBDcmVhdGUgaW4gRmlyZWJhc2UgQXV0aFxyXG4gICAgICAgIGNvbnN0IGF1dGhVc2VyID0gYXdhaXQgYWRtaW5BdXRoLmNyZWF0ZVVzZXIoe1xyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQsIC8vIFdlIHVzZSByYXcgcGFzc3dvcmQgZm9yIEZpcmViYXNlIEF1dGhcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IG5hbWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDIuIENyZWF0ZSBpbiBGaXJlc3RvcmVcclxuICAgICAgICBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aFVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLCAvLyBLZWVwIGZvciBOZXh0QXV0aC9iY3J5cHQgY29tcGF0aWJpbGl0eSBpZiBuZWVkZWRcclxuICAgICAgICAgICAgcm9sZSxcclxuICAgICAgICAgICAgaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWdpc3RyYXRpb24gZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFkbWluQ3JlYXRlVXNlclNjaGVtYSA9IHoub2JqZWN0KHtcclxuICAgIG5hbWU6IHouc3RyaW5nKCkubWluKDIsIFwiTmFtZSBpcyB0b28gc2hvcnRcIiksXHJcbiAgICBlbWFpbDogei5zdHJpbmcoKS5lbWFpbChcIkludmFsaWQgZW1haWxcIiksXHJcbiAgICBwYXNzd29yZDogei5zdHJpbmcoKS5taW4oNiwgXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyc1wiKSxcclxuICAgIHJvbGU6IHouZW51bShbXCJBRE1JTlwiLCBcIlNUQUZGXCJdKSxcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRtaW5DcmVhdGVVc2VyKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiU1RBRkZcIjtcclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZWQgPSBhZG1pbkNyZWF0ZVVzZXJTY2hlbWEuc2FmZVBhcnNlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogdmFsaWRhdGVkLmVycm9yLmlzc3Vlc1swXT8ubWVzc2FnZSB8fCBcIlZhbGlkYXRpb24gZmFpbGVkXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJTbmFwID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidXNlcnNcIikud2hlcmUoXCJlbWFpbFwiLCBcIj09XCIsIGVtYWlsKS5nZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyU25hcC5lbXB0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogXCJVc2VyIGFscmVhZHkgZXhpc3RzXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcclxuXHJcbiAgICAgICAgLy8gMS4gQ3JlYXRlIGluIEZpcmViYXNlIEF1dGhcclxuICAgICAgICBjb25zdCBhdXRoVXNlciA9IGF3YWl0IGFkbWluQXV0aC5jcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogbmFtZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gMi4gQ3JlYXRlIGluIEZpcmVzdG9yZVxyXG4gICAgICAgIGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoVXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHJvbGUsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQWRtaW4gdXNlciBjcmVhdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVXNlciBNYW5hZ2VtZW50XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VycygpIHtcclxuICAgIGNvbnN0IHNuYXAgPSBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKS5nZXQoKTtcclxuICAgIHJldHVybiBzbmFwLmRvY3MubWFwKGRvYyA9PiAoe1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICBjcmVhdGVkQXQ6IGRvYy5kYXRhKCkuY3JlYXRlZEF0Py50b0RhdGUoKSxcclxuICAgICAgICB1cGRhdGVkQXQ6IGRvYy5kYXRhKCkudXBkYXRlZEF0Py50b0RhdGUoKSxcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZVVzZXJBY3RpdmF0aW9uKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkb2NSZWYgPSBhZG1pbkRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlcklkKTtcclxuICAgIGNvbnN0IGRvYyA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcclxuXHJcbiAgICBpZiAoIWRvYy5leGlzdHMpIHJldHVybiB7IGVycm9yOiBcIlVzZXIgbm90IGZvdW5kXCIgfTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50U3RhdHVzID0gZG9jLmRhdGEoKT8uaXNBY3RpdmU7XHJcbiAgICBhd2FpdCBkb2NSZWYudXBkYXRlKHsgaXNBY3RpdmU6ICFjdXJyZW50U3RhdHVzIH0pO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBGaXJlYmFzZSBBdXRoIHN0YXR1cyBpZiBuZWVkZWQgKG9wdGlvbmFsKVxyXG4gICAgYXdhaXQgYWRtaW5BdXRoLnVwZGF0ZVVzZXIodXNlcklkLCB7IGRpc2FibGVkOiBjdXJyZW50U3RhdHVzIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuLy8gUHJvZHVjdCBNYW5hZ2VtZW50XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcclxuICAgIGNvbnN0IHNuYXAgPSBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKS5vcmRlckJ5KFwidXBkYXRlZEF0XCIsIFwiZGVzY1wiKS5nZXQoKTtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gc25hcC5kb2NzLm1hcChkb2MgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgY3JlYXRlZEF0OiBkb2MuZGF0YSgpLmNyZWF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICAgICAgdXBkYXRlZEF0OiBkb2MuZGF0YSgpLnVwZGF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHNvbGQgY291bnQgZnJvbSB0cmFuc2FjdGlvbnNcclxuICAgIGNvbnN0IHR4SXRlbXNTbmFwID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidHJhbnNhY3Rpb25faXRlbXNcIikuZ2V0KCk7XHJcbiAgICBjb25zdCBzb2xkQ291bnRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XHJcblxyXG4gICAgdHhJdGVtc1NuYXAuZG9jcy5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgc29sZENvdW50c1tpdGVtLnByb2R1Y3RJZF0gPSAoc29sZENvdW50c1tpdGVtLnByb2R1Y3RJZF0gfHwgMCkgKyBpdGVtLnF1YW50aXR5O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcChwID0+ICh7XHJcbiAgICAgICAgLi4ucCxcclxuICAgICAgICBwcmljZTogTnVtYmVyKChwIGFzIGFueSkucHJpY2UpLFxyXG4gICAgICAgIHNvbGRDb3VudDogc29sZENvdW50c1twLmlkXSB8fCAwXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb3dTdG9ja0NvdW50KCkge1xyXG4gICAgY29uc3Qgc25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpLmdldCgpO1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBzbmFwLmRvY3MubWFwKGRvYyA9PiAoe1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgbmFtZTogZG9jLmRhdGEoKS5uYW1lLFxyXG4gICAgICAgIHN0b2NrOiBkb2MuZGF0YSgpLnN0b2NrLFxyXG4gICAgICAgIGxvd1N0b2NrVGhyZXNob2xkOiBkb2MuZGF0YSgpLmxvd1N0b2NrVGhyZXNob2xkIHx8IDUsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgbG93U3RvY2tJdGVtcyA9IHByb2R1Y3RzLmZpbHRlcihwID0+IHAuc3RvY2sgPD0gcC5sb3dTdG9ja1RocmVzaG9sZCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvdW50OiBsb3dTdG9ja0l0ZW1zLmxlbmd0aCxcclxuICAgICAgICBpdGVtczogbG93U3RvY2tJdGVtc1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RCeUJhcmNvZGUoYmFyY29kZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB0cmltbWVkQmFyY29kZSA9IGJhcmNvZGUudHJpbSgpO1xyXG4gICAgY29uc3Qgc25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpLndoZXJlKFwiYmFyY29kZVwiLCBcIj09XCIsIHRyaW1tZWRCYXJjb2RlKS5nZXQoKTtcclxuXHJcbiAgICBpZiAoc25hcC5lbXB0eSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgZG9jID0gc25hcC5kb2NzWzBdO1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgY3JlYXRlZEF0OiBkb2MuZGF0YSgpLmNyZWF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICAgICAgdXBkYXRlZEF0OiBkb2MuZGF0YSgpLnVwZGF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBzb2xkIGNvdW50XHJcbiAgICBjb25zdCB0eEl0ZW1zU25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInRyYW5zYWN0aW9uX2l0ZW1zXCIpLndoZXJlKFwicHJvZHVjdElkXCIsIFwiPT1cIiwgZG9jLmlkKS5nZXQoKTtcclxuICAgIGNvbnN0IHNvbGRDb3VudCA9IHR4SXRlbXNTbmFwLmRvY3MucmVkdWNlKChzdW0sIGQpID0+IHN1bSArIGQuZGF0YSgpLnF1YW50aXR5LCAwKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgcHJpY2U6IE51bWJlcigocHJvZHVjdCBhcyBhbnkpLnByaWNlKSxcclxuICAgICAgICBzb2xkQ291bnRcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cHNlcnRQcm9kdWN0KGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgeyBpZCwgYmFyY29kZSwgbmFtZSwgcHJpY2UsIHN0b2NrLCBsb3dTdG9ja1RocmVzaG9sZCwgY2F0ZWdvcnksIGltYWdlIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgcGFyc2VkUHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlKSB8fCAwO1xyXG4gICAgY29uc3QgcGFyc2VkU3RvY2sgPSBwYXJzZUludChzdG9jaykgfHwgMDtcclxuICAgIGNvbnN0IHBhcnNlZFRocmVzaG9sZCA9IHBhcnNlSW50KGxvd1N0b2NrVGhyZXNob2xkKSB8fCA1O1xyXG5cclxuICAgIGNvbnN0IGZpcmVzdG9yZURhdGEgPSB7XHJcbiAgICAgICAgYmFyY29kZSxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHByaWNlOiBwYXJzZWRQcmljZSxcclxuICAgICAgICBzdG9jazogcGFyc2VkU3RvY2ssXHJcbiAgICAgICAgbG93U3RvY2tUaHJlc2hvbGQ6IHBhcnNlZFRocmVzaG9sZCxcclxuICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpLmRvYyhpZCkudXBkYXRlKGZpcmVzdG9yZURhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKS5hZGQoe1xyXG4gICAgICAgICAgICAuLi5maXJlc3RvcmVEYXRhLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdChpZDogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKS5kb2MoaWQpLmRlbGV0ZSgpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG4vLyBUcmFuc2FjdGlvbiBNYW5hZ2VtZW50XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb21wbGV0ZVNhbGUoY2FzaGllcklkOiBzdHJpbmcsIGl0ZW1zOiBhbnlbXSwgdG90YWw6IG51bWJlcikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBGaXJlc3RvcmUgVHJhbnNhY3Rpb25cclxuICAgICAgICBhd2FpdCBhZG1pbkRiLnJ1blRyYW5zYWN0aW9uKGFzeW5jICh0cmFuc2FjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0eFJlZiA9IGFkbWluRGIuY29sbGVjdGlvbihcInRyYW5zYWN0aW9uc1wiKS5kb2MoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDEuIENyZWF0ZSBUcmFuc2FjdGlvblxyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5zZXQodHhSZWYsIHtcclxuICAgICAgICAgICAgICAgIGNhc2hpZXJJZCxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBOdW1iZXIodG90YWwpLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIDIuIENyZWF0ZSBJdGVtcyBhbmQgVXBkYXRlIFN0b2Nrc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1SZWYgPSBhZG1pbkRiLmNvbGxlY3Rpb24oXCJ0cmFuc2FjdGlvbl9pdGVtc1wiKS5kb2MoKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnNldChpdGVtUmVmLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25JZDogdHhSZWYuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiBpdGVtLnByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZUF0VGltZTogTnVtYmVyKGl0ZW0ucHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFJlZiA9IGFkbWluRGIuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpLmRvYyhpdGVtLnByb2R1Y3RJZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0RG9jID0gYXdhaXQgdHJhbnNhY3Rpb24uZ2V0KHByb2R1Y3RSZWYpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0RG9jLmV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdG9jayA9IHByb2R1Y3REb2MuZGF0YSgpPy5zdG9jayB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnVwZGF0ZShwcm9kdWN0UmVmLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrOiBjdXJyZW50U3RvY2sgLSBpdGVtLnF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTYWxlIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNvbXBsZXRlIHNhbGVcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VHJhbnNhY3Rpb25zKCkge1xyXG4gICAgY29uc3Qgc25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInRyYW5zYWN0aW9uc1wiKS5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKS5nZXQoKTtcclxuICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgZG9jIG9mIHNuYXAuZG9jcykge1xyXG4gICAgICAgIGNvbnN0IHR4RGF0YSA9IGRvYy5kYXRhKCk7XHJcblxyXG4gICAgICAgIC8vIEZldGNoIENhc2hpZXJcclxuICAgICAgICBjb25zdCBjYXNoaWVyRG9jID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHR4RGF0YS5jYXNoaWVySWQpLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGNhc2hpZXIgPSBjYXNoaWVyRG9jLmV4aXN0cyA/IHsgaWQ6IGNhc2hpZXJEb2MuaWQsIC4uLmNhc2hpZXJEb2MuZGF0YSgpIH0gOiBudWxsO1xyXG5cclxuICAgICAgICAvLyBGZXRjaCBJdGVtc1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zU25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInRyYW5zYWN0aW9uX2l0ZW1zXCIpLndoZXJlKFwidHJhbnNhY3Rpb25JZFwiLCBcIj09XCIsIGRvYy5pZCkuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtRG9jIG9mIGl0ZW1zU25hcC5kb2NzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EYXRhID0gaXRlbURvYy5kYXRhKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3REb2MgPSBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKS5kb2MoaXRlbURhdGEucHJvZHVjdElkKS5nZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3REb2MuZXhpc3RzID8geyBpZDogcHJvZHVjdERvYy5pZCwgLi4ucHJvZHVjdERvYy5kYXRhKCkgfSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIC4uLml0ZW1EYXRhLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW1Eb2MuaWQsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJhbnNhY3Rpb25zLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAuLi50eERhdGEsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogdHhEYXRhLmNyZWF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICAgICAgICAgIGNhc2hpZXIsXHJcbiAgICAgICAgICAgIGl0ZW1zXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zYWN0aW9ucztcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9SQW1Oc0IsMExBQUEifQ==
}),
"[project]/src/lib/data:cb60cc [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteProduct",
    ()=>$$RSC_SERVER_ACTION_8
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"403e3f9c60d3a714533fe1cfb72328b31492e38e5d":"deleteProduct"},"src/lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("403e3f9c60d3a714533fe1cfb72328b31492e38e5d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteProduct");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IGFkbWluRGIsIGFkbWluQXV0aCB9IGZyb20gXCJAL2xpYi9maXJlYmFzZS1hZG1pblwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xyXG5cclxuY29uc3QgcmVnaXN0ZXJTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICBuYW1lOiB6LnN0cmluZygpLm1pbigyLCBcIk5hbWUgaXMgdG9vIHNob3J0XCIpLFxyXG4gICAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoXCJJbnZhbGlkIGVtYWlsXCIpLFxyXG4gICAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYsIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIiksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVkID0gcmVnaXN0ZXJTY2hlbWEuc2FmZVBhcnNlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogdmFsaWRhdGVkLmVycm9yLmlzc3Vlc1swXT8ubWVzc2FnZSB8fCBcIlZhbGlkYXRpb24gZmFpbGVkXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHVzZXIgZXhpc3RzIGluIEZpcmVzdG9yZVxyXG4gICAgICAgIGNvbnN0IHVzZXJTbmFwID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidXNlcnNcIikud2hlcmUoXCJlbWFpbFwiLCBcIj09XCIsIGVtYWlsKS5nZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyU25hcC5lbXB0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogXCJVc2VyIGFscmVhZHkgZXhpc3RzXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgdXNlciBjb3VudCBmb3Igcm9sZSBhc3NpZ25tZW50XHJcbiAgICAgICAgY29uc3QgdXNlcnNTbmFwID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuY291bnQoKS5nZXQoKTtcclxuICAgICAgICBjb25zdCB1c2VyQ291bnQgPSB1c2Vyc1NuYXAuZGF0YSgpLmNvdW50O1xyXG5cclxuICAgICAgICBjb25zdCByb2xlID0gdXNlckNvdW50ID09PSAwID8gXCJBRE1JTlwiIDogXCJTVEFGRlwiO1xyXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdXNlckNvdW50ID09PSAwO1xyXG5cclxuICAgICAgICAvLyAxLiBDcmVhdGUgaW4gRmlyZWJhc2UgQXV0aFxyXG4gICAgICAgIGNvbnN0IGF1dGhVc2VyID0gYXdhaXQgYWRtaW5BdXRoLmNyZWF0ZVVzZXIoe1xyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQsIC8vIFdlIHVzZSByYXcgcGFzc3dvcmQgZm9yIEZpcmViYXNlIEF1dGhcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IG5hbWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDIuIENyZWF0ZSBpbiBGaXJlc3RvcmVcclxuICAgICAgICBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoYXV0aFVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLCAvLyBLZWVwIGZvciBOZXh0QXV0aC9iY3J5cHQgY29tcGF0aWJpbGl0eSBpZiBuZWVkZWRcclxuICAgICAgICAgICAgcm9sZSxcclxuICAgICAgICAgICAgaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWdpc3RyYXRpb24gZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFkbWluQ3JlYXRlVXNlclNjaGVtYSA9IHoub2JqZWN0KHtcclxuICAgIG5hbWU6IHouc3RyaW5nKCkubWluKDIsIFwiTmFtZSBpcyB0b28gc2hvcnRcIiksXHJcbiAgICBlbWFpbDogei5zdHJpbmcoKS5lbWFpbChcIkludmFsaWQgZW1haWxcIiksXHJcbiAgICBwYXNzd29yZDogei5zdHJpbmcoKS5taW4oNiwgXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyc1wiKSxcclxuICAgIHJvbGU6IHouZW51bShbXCJBRE1JTlwiLCBcIlNUQUZGXCJdKSxcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRtaW5DcmVhdGVVc2VyKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiU1RBRkZcIjtcclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZWQgPSBhZG1pbkNyZWF0ZVVzZXJTY2hlbWEuc2FmZVBhcnNlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogdmFsaWRhdGVkLmVycm9yLmlzc3Vlc1swXT8ubWVzc2FnZSB8fCBcIlZhbGlkYXRpb24gZmFpbGVkXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJTbmFwID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidXNlcnNcIikud2hlcmUoXCJlbWFpbFwiLCBcIj09XCIsIGVtYWlsKS5nZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyU25hcC5lbXB0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogXCJVc2VyIGFscmVhZHkgZXhpc3RzXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcclxuXHJcbiAgICAgICAgLy8gMS4gQ3JlYXRlIGluIEZpcmViYXNlIEF1dGhcclxuICAgICAgICBjb25zdCBhdXRoVXNlciA9IGF3YWl0IGFkbWluQXV0aC5jcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogbmFtZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gMi4gQ3JlYXRlIGluIEZpcmVzdG9yZVxyXG4gICAgICAgIGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhhdXRoVXNlci51aWQpLnNldCh7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHJvbGUsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQWRtaW4gdXNlciBjcmVhdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVXNlciBNYW5hZ2VtZW50XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VycygpIHtcclxuICAgIGNvbnN0IHNuYXAgPSBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKS5nZXQoKTtcclxuICAgIHJldHVybiBzbmFwLmRvY3MubWFwKGRvYyA9PiAoe1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICBjcmVhdGVkQXQ6IGRvYy5kYXRhKCkuY3JlYXRlZEF0Py50b0RhdGUoKSxcclxuICAgICAgICB1cGRhdGVkQXQ6IGRvYy5kYXRhKCkudXBkYXRlZEF0Py50b0RhdGUoKSxcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZVVzZXJBY3RpdmF0aW9uKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkb2NSZWYgPSBhZG1pbkRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModXNlcklkKTtcclxuICAgIGNvbnN0IGRvYyA9IGF3YWl0IGRvY1JlZi5nZXQoKTtcclxuXHJcbiAgICBpZiAoIWRvYy5leGlzdHMpIHJldHVybiB7IGVycm9yOiBcIlVzZXIgbm90IGZvdW5kXCIgfTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50U3RhdHVzID0gZG9jLmRhdGEoKT8uaXNBY3RpdmU7XHJcbiAgICBhd2FpdCBkb2NSZWYudXBkYXRlKHsgaXNBY3RpdmU6ICFjdXJyZW50U3RhdHVzIH0pO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBGaXJlYmFzZSBBdXRoIHN0YXR1cyBpZiBuZWVkZWQgKG9wdGlvbmFsKVxyXG4gICAgYXdhaXQgYWRtaW5BdXRoLnVwZGF0ZVVzZXIodXNlcklkLCB7IGRpc2FibGVkOiBjdXJyZW50U3RhdHVzIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuLy8gUHJvZHVjdCBNYW5hZ2VtZW50XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcclxuICAgIGNvbnN0IHNuYXAgPSBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKS5vcmRlckJ5KFwidXBkYXRlZEF0XCIsIFwiZGVzY1wiKS5nZXQoKTtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gc25hcC5kb2NzLm1hcChkb2MgPT4gKHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgY3JlYXRlZEF0OiBkb2MuZGF0YSgpLmNyZWF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICAgICAgdXBkYXRlZEF0OiBkb2MuZGF0YSgpLnVwZGF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHNvbGQgY291bnQgZnJvbSB0cmFuc2FjdGlvbnNcclxuICAgIGNvbnN0IHR4SXRlbXNTbmFwID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidHJhbnNhY3Rpb25faXRlbXNcIikuZ2V0KCk7XHJcbiAgICBjb25zdCBzb2xkQ291bnRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XHJcblxyXG4gICAgdHhJdGVtc1NuYXAuZG9jcy5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgc29sZENvdW50c1tpdGVtLnByb2R1Y3RJZF0gPSAoc29sZENvdW50c1tpdGVtLnByb2R1Y3RJZF0gfHwgMCkgKyBpdGVtLnF1YW50aXR5O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcChwID0+ICh7XHJcbiAgICAgICAgLi4ucCxcclxuICAgICAgICBwcmljZTogTnVtYmVyKChwIGFzIGFueSkucHJpY2UpLFxyXG4gICAgICAgIHNvbGRDb3VudDogc29sZENvdW50c1twLmlkXSB8fCAwXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb3dTdG9ja0NvdW50KCkge1xyXG4gICAgY29uc3Qgc25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpLmdldCgpO1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBzbmFwLmRvY3MubWFwKGRvYyA9PiAoe1xyXG4gICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgbmFtZTogZG9jLmRhdGEoKS5uYW1lLFxyXG4gICAgICAgIHN0b2NrOiBkb2MuZGF0YSgpLnN0b2NrLFxyXG4gICAgICAgIGxvd1N0b2NrVGhyZXNob2xkOiBkb2MuZGF0YSgpLmxvd1N0b2NrVGhyZXNob2xkIHx8IDUsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgbG93U3RvY2tJdGVtcyA9IHByb2R1Y3RzLmZpbHRlcihwID0+IHAuc3RvY2sgPD0gcC5sb3dTdG9ja1RocmVzaG9sZCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvdW50OiBsb3dTdG9ja0l0ZW1zLmxlbmd0aCxcclxuICAgICAgICBpdGVtczogbG93U3RvY2tJdGVtc1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RCeUJhcmNvZGUoYmFyY29kZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB0cmltbWVkQmFyY29kZSA9IGJhcmNvZGUudHJpbSgpO1xyXG4gICAgY29uc3Qgc25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpLndoZXJlKFwiYmFyY29kZVwiLCBcIj09XCIsIHRyaW1tZWRCYXJjb2RlKS5nZXQoKTtcclxuXHJcbiAgICBpZiAoc25hcC5lbXB0eSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgZG9jID0gc25hcC5kb2NzWzBdO1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IHtcclxuICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgY3JlYXRlZEF0OiBkb2MuZGF0YSgpLmNyZWF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICAgICAgdXBkYXRlZEF0OiBkb2MuZGF0YSgpLnVwZGF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBzb2xkIGNvdW50XHJcbiAgICBjb25zdCB0eEl0ZW1zU25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInRyYW5zYWN0aW9uX2l0ZW1zXCIpLndoZXJlKFwicHJvZHVjdElkXCIsIFwiPT1cIiwgZG9jLmlkKS5nZXQoKTtcclxuICAgIGNvbnN0IHNvbGRDb3VudCA9IHR4SXRlbXNTbmFwLmRvY3MucmVkdWNlKChzdW0sIGQpID0+IHN1bSArIGQuZGF0YSgpLnF1YW50aXR5LCAwKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgcHJpY2U6IE51bWJlcigocHJvZHVjdCBhcyBhbnkpLnByaWNlKSxcclxuICAgICAgICBzb2xkQ291bnRcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cHNlcnRQcm9kdWN0KGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgeyBpZCwgYmFyY29kZSwgbmFtZSwgcHJpY2UsIHN0b2NrLCBsb3dTdG9ja1RocmVzaG9sZCwgY2F0ZWdvcnksIGltYWdlIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgcGFyc2VkUHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlKSB8fCAwO1xyXG4gICAgY29uc3QgcGFyc2VkU3RvY2sgPSBwYXJzZUludChzdG9jaykgfHwgMDtcclxuICAgIGNvbnN0IHBhcnNlZFRocmVzaG9sZCA9IHBhcnNlSW50KGxvd1N0b2NrVGhyZXNob2xkKSB8fCA1O1xyXG5cclxuICAgIGNvbnN0IGZpcmVzdG9yZURhdGEgPSB7XHJcbiAgICAgICAgYmFyY29kZSxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHByaWNlOiBwYXJzZWRQcmljZSxcclxuICAgICAgICBzdG9jazogcGFyc2VkU3RvY2ssXHJcbiAgICAgICAgbG93U3RvY2tUaHJlc2hvbGQ6IHBhcnNlZFRocmVzaG9sZCxcclxuICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpLmRvYyhpZCkudXBkYXRlKGZpcmVzdG9yZURhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKS5hZGQoe1xyXG4gICAgICAgICAgICAuLi5maXJlc3RvcmVEYXRhLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdChpZDogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKS5kb2MoaWQpLmRlbGV0ZSgpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG4vLyBUcmFuc2FjdGlvbiBNYW5hZ2VtZW50XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb21wbGV0ZVNhbGUoY2FzaGllcklkOiBzdHJpbmcsIGl0ZW1zOiBhbnlbXSwgdG90YWw6IG51bWJlcikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBGaXJlc3RvcmUgVHJhbnNhY3Rpb25cclxuICAgICAgICBhd2FpdCBhZG1pbkRiLnJ1blRyYW5zYWN0aW9uKGFzeW5jICh0cmFuc2FjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0eFJlZiA9IGFkbWluRGIuY29sbGVjdGlvbihcInRyYW5zYWN0aW9uc1wiKS5kb2MoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDEuIENyZWF0ZSBUcmFuc2FjdGlvblxyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5zZXQodHhSZWYsIHtcclxuICAgICAgICAgICAgICAgIGNhc2hpZXJJZCxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBOdW1iZXIodG90YWwpLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIDIuIENyZWF0ZSBJdGVtcyBhbmQgVXBkYXRlIFN0b2Nrc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1SZWYgPSBhZG1pbkRiLmNvbGxlY3Rpb24oXCJ0cmFuc2FjdGlvbl9pdGVtc1wiKS5kb2MoKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnNldChpdGVtUmVmLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25JZDogdHhSZWYuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiBpdGVtLnByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZUF0VGltZTogTnVtYmVyKGl0ZW0ucHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFJlZiA9IGFkbWluRGIuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpLmRvYyhpdGVtLnByb2R1Y3RJZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0RG9jID0gYXdhaXQgdHJhbnNhY3Rpb24uZ2V0KHByb2R1Y3RSZWYpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0RG9jLmV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdG9jayA9IHByb2R1Y3REb2MuZGF0YSgpPy5zdG9jayB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnVwZGF0ZShwcm9kdWN0UmVmLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrOiBjdXJyZW50U3RvY2sgLSBpdGVtLnF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTYWxlIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNvbXBsZXRlIHNhbGVcIiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VHJhbnNhY3Rpb25zKCkge1xyXG4gICAgY29uc3Qgc25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInRyYW5zYWN0aW9uc1wiKS5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKS5nZXQoKTtcclxuICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgZG9jIG9mIHNuYXAuZG9jcykge1xyXG4gICAgICAgIGNvbnN0IHR4RGF0YSA9IGRvYy5kYXRhKCk7XHJcblxyXG4gICAgICAgIC8vIEZldGNoIENhc2hpZXJcclxuICAgICAgICBjb25zdCBjYXNoaWVyRG9jID0gYXdhaXQgYWRtaW5EYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHR4RGF0YS5jYXNoaWVySWQpLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGNhc2hpZXIgPSBjYXNoaWVyRG9jLmV4aXN0cyA/IHsgaWQ6IGNhc2hpZXJEb2MuaWQsIC4uLmNhc2hpZXJEb2MuZGF0YSgpIH0gOiBudWxsO1xyXG5cclxuICAgICAgICAvLyBGZXRjaCBJdGVtc1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zU25hcCA9IGF3YWl0IGFkbWluRGIuY29sbGVjdGlvbihcInRyYW5zYWN0aW9uX2l0ZW1zXCIpLndoZXJlKFwidHJhbnNhY3Rpb25JZFwiLCBcIj09XCIsIGRvYy5pZCkuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtRG9jIG9mIGl0ZW1zU25hcC5kb2NzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EYXRhID0gaXRlbURvYy5kYXRhKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3REb2MgPSBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKS5kb2MoaXRlbURhdGEucHJvZHVjdElkKS5nZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3REb2MuZXhpc3RzID8geyBpZDogcHJvZHVjdERvYy5pZCwgLi4ucHJvZHVjdERvYy5kYXRhKCkgfSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIC4uLml0ZW1EYXRhLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW1Eb2MuaWQsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJhbnNhY3Rpb25zLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICAuLi50eERhdGEsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogdHhEYXRhLmNyZWF0ZWRBdD8udG9EYXRlKCksXHJcbiAgICAgICAgICAgIGNhc2hpZXIsXHJcbiAgICAgICAgICAgIGl0ZW1zXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zYWN0aW9ucztcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9SQWdQc0IsMExBQUEifQ==
}),
"[project]/src/components/shared/CameraScanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CameraScanner",
    ()=>CameraScanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/html5-qrcode/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$html5$2d$qrcode$2d$scanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html5-qrcode/esm/html5-qrcode-scanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html5-qrcode/esm/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CameraScanner({ onScan, onClose }) {
    _s();
    const scannerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CameraScanner.useEffect": ()=>{
            // Initialize scanner
            scannerRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$html5$2d$qrcode$2d$scanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeScanner"]("reader", {
                fps: 10,
                qrbox: {
                    width: 250,
                    height: 150
                },
                aspectRatio: 1.777778,
                formatsToSupport: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].EAN_13,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].EAN_8,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].CODE_128,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].CODE_39,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].UPC_A,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].UPC_E,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].QR_CODE
                ]
            }, /* verbose= */ false);
            scannerRef.current.render({
                "CameraScanner.useEffect": (decodedText)=>{
                    onScan(decodedText);
                    if (scannerRef.current) {
                        scannerRef.current.clear();
                    }
                    onClose();
                }
            }["CameraScanner.useEffect"], {
                "CameraScanner.useEffect": (error)=>{
                // Ignore errors
                }
            }["CameraScanner.useEffect"]);
            return ({
                "CameraScanner.useEffect": ()=>{
                    if (scannerRef.current) {
                        scannerRef.current.clear().catch({
                            "CameraScanner.useEffect": (err)=>console.error("Error clearing scanner", err)
                        }["CameraScanner.useEffect"]);
                    }
                }
            })["CameraScanner.useEffect"];
        }
    }["CameraScanner.useEffect"], [
        onScan,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b border-white/5 flex justify-between items-center bg-zinc-950",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                    className: "w-4 h-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/CameraScanner.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-black uppercase tracking-widest text-white",
                                    children: "Camera Scanner"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/CameraScanner.tsx",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/CameraScanner.tsx",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            onClick: onClose,
                            className: "text-white hover:bg-white/10 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/CameraScanner.tsx",
                                lineNumber: 66,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/CameraScanner.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/CameraScanner.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aspect-video relative bg-black",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "reader",
                        className: "w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/CameraScanner.tsx",
                        lineNumber: 71,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/CameraScanner.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 text-center bg-zinc-950",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-zinc-400 font-medium leading-relaxed",
                        children: [
                            "Point your camera at the barcode.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/shared/CameraScanner.tsx",
                                lineNumber: 76,
                                columnNumber: 58
                            }, this),
                            " Make sure it is well-lit and centered."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/CameraScanner.tsx",
                        lineNumber: 75,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/CameraScanner.tsx",
                    lineNumber: 74,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/CameraScanner.tsx",
            lineNumber: 59,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/shared/CameraScanner.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
_s(CameraScanner, "MgSF7e+yOSEPzIqeTzYwyZaG7+4=");
_c = CameraScanner;
var _c;
__turbopack_context__.k.register(_c, "CameraScanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/products/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$76e8b4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:76e8b4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$6f0b56__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:6f0b56 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$cb60cc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:cb60cc [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CameraScanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/CameraScanner.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function ProductsManagement() {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showScanner, setShowScanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scannedBarcode, setScannedBarcode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [itemsPerPage, setItemsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8);
    const calculateItemsPerPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductsManagement.useCallback[calculateItemsPerPage]": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const height = window.innerHeight;
                // Fixed overhead: Header (~220px) + Table Header/Footer (~140px) = ~360px
                // Average row height: ~74px
                const calculated = Math.max(4, Math.floor((height - 360) / 74));
                setItemsPerPage(calculated);
            }
        }
    }["ProductsManagement.useCallback[calculateItemsPerPage]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsManagement.useEffect": ()=>{
            calculateItemsPerPage();
            window.addEventListener('resize', calculateItemsPerPage);
            return ({
                "ProductsManagement.useEffect": ()=>window.removeEventListener('resize', calculateItemsPerPage)
            })["ProductsManagement.useEffect"];
        }
    }["ProductsManagement.useEffect"], [
        calculateItemsPerPage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsManagement.useEffect": ()=>{
            setCurrentPage(1);
        }
    }["ProductsManagement.useEffect"], [
        searchTerm,
        itemsPerPage
    ]); // Reset to page 1 if items per page changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsManagement.useEffect": ()=>{
            fetchProducts();
        }
    }["ProductsManagement.useEffect"], []);
    async function fetchProducts() {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$76e8b4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProducts"])();
        setProducts(data);
    }
    const handleImageChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            id: selectedProduct?.id,
            name: formData.get("name"),
            barcode: formData.get("barcode"),
            price: formData.get("price"),
            stock: formData.get("stock"),
            lowStockThreshold: formData.get("lowStockThreshold"),
            category: formData.get("category"),
            image: imagePreview
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$6f0b56__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["upsertProduct"])(data);
        fetchProducts();
        setIsOpen(false);
        setImagePreview(null);
        setScannedBarcode("");
    }
    const filteredProducts = products.filter((p)=>p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm));
    const handleDelete = async (id)=>{
        if (confirm("Are you sure you want to delete this product? This action cannot be undone.")) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$cb60cc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProduct"])(id);
            fetchProducts();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 md:space-y-6 pb-20 md:pb-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl md:text-3xl font-black tracking-tight uppercase flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        className: "w-6 h-6 md:w-8 md:h-8 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 25
                                    }, this),
                                    " Inventory"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/products/page.tsx",
                                lineNumber: 113,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Manage products, prices, and stock"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/products/page.tsx",
                                lineNumber: 116,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/products/page.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>{
                            setSelectedProduct(null);
                            setScannedBarcode("");
                            setImagePreview(null);
                            setIsOpen(true);
                        },
                        className: "w-full sm:w-auto font-black uppercase tracking-widest text-xs h-11 shadow-lg shadow-primary/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/products/page.tsx",
                                lineNumber: 127,
                                columnNumber: 21
                            }, this),
                            " New Product"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/products/page.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/products/page.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-border shadow-md bg-card overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-border bg-muted/30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/products/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Search by name or barcode...",
                                    className: "pl-10 h-11 bg-background border-border w-full",
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/products/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/products/page.tsx",
                            lineNumber: 133,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/products/page.tsx",
                        lineNumber: 132,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        className: "bg-muted/50 transition-none hover:bg-muted/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "min-w-[200px] uppercase text-[10px] font-black",
                                                children: "Product"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "min-w-[120px] uppercase text-[10px] font-black",
                                                children: "Barcode"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "min-w-[100px] uppercase text-[10px] font-black hidden md:table-cell",
                                                children: "Category"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "min-w-[100px] uppercase text-[10px] font-black text-right",
                                                children: "Price"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "min-w-[100px] uppercase text-[10px] font-black text-center",
                                                children: "Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "min-w-[100px] uppercase text-[10px] font-black text-center",
                                                children: "Sold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "min-w-[120px] uppercase text-[10px] font-black text-right px-4 md:px-6",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/products/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: [
                                        products.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                colSpan: 7,
                                                className: "text-center h-24 text-muted-foreground italic",
                                                children: "No products found"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/products/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 33
                                        }, this) : null,
                                        products.filter((p)=>p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm)).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product)=>{
                                            const isLowStock = product.stock <= (product.lowStockThreshold || 5);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                className: `hover:bg-muted/30 transition-colors ${isLowStock ? 'bg-amber-500/5' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 rounded-lg overflow-hidden bg-muted border border-border flex shrink-0",
                                                                    children: product.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: product.image,
                                                                        alt: product.name,
                                                                        className: "w-full h-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                                        lineNumber: 174,
                                                                        columnNumber: 61
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                        className: "w-5 h-5 m-auto text-muted-foreground/30"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                                        lineNumber: 176,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/products/page.tsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-sm tracking-tight text-foreground uppercase",
                                                                    children: product.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/products/page.tsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/products/page.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-mono text-muted-foreground font-black bg-muted/50 px-2 py-0.5 rounded uppercase",
                                                            children: product.barcode
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/products/page.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "hidden md:table-cell",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full",
                                                            children: product.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/products/page.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "text-right font-mono font-black text-primary italic tabular-nums",
                                                        children: [
                                                            "₱",
                                                            product.price.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `font-mono font-black text-sm tabular-nums ${isLowStock ? 'text-amber-500' : 'text-emerald-500'}`,
                                                                    children: product.stock
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/products/page.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 53
                                                                }, this),
                                                                isLowStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[8px] font-black bg-amber-500 text-white px-1.5 py-0.5 rounded uppercase tracking-tighter w-fit",
                                                                    children: "Low Stock"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/products/page.tsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/products/page.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "text-center font-mono font-black text-zinc-500 italic tabular-nums",
                                                        children: product.soldCount || 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "text-right px-4 md:px-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-end gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "ghost",
                                                                    size: "icon",
                                                                    className: "h-8 w-8 text-muted-foreground hover:text-primary",
                                                                    onClick: ()=>{
                                                                        setSelectedProduct(product);
                                                                        setImagePreview(product.image);
                                                                        setIsOpen(true);
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                                        lineNumber: 216,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/products/page.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "ghost",
                                                                    size: "icon",
                                                                    className: "h-8 w-8 text-muted-foreground hover:text-destructive",
                                                                    onClick: ()=>handleDelete(product.id),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                                        lineNumber: 224,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/products/page.tsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/products/page.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, product.id, true, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 41
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/products/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/products/page.tsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/products/page.tsx",
                        lineNumber: 143,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-2 py-4 border-t border-border mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-black uppercase tracking-widest text-muted-foreground",
                                children: [
                                    "Showing ",
                                    Math.min((currentPage - 1) * itemsPerPage + 1, products.filter((p)=>p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm)).length),
                                    " to ",
                                    Math.min(currentPage * itemsPerPage, products.filter((p)=>p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm)).length),
                                    " of ",
                                    products.filter((p)=>p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm)).length,
                                    " Products"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/products/page.tsx",
                                lineNumber: 237,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        className: "h-9 px-4 font-bold rounded-xl border-border",
                                        onClick: ()=>setCurrentPage((prev)=>Math.max(1, prev - 1)),
                                        disabled: currentPage === 1,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "w-4 h-4 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 29
                                            }, this),
                                            "PREV"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: Array.from({
                                            length: Math.ceil(products.filter((p)=>p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm)).length / itemsPerPage)
                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: currentPage === i + 1 ? "default" : "ghost",
                                                size: "icon",
                                                className: `h-9 w-9 font-black rounded-xl transition-all ${currentPage === i + 1 ? 'shadow-lg shadow-primary/20 scale-110' : ''}`,
                                                onClick: ()=>setCurrentPage(i + 1),
                                                children: i + 1
                                            }, i, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        className: "h-9 px-4 font-bold rounded-xl border-border",
                                        onClick: ()=>setCurrentPage((prev)=>Math.min(Math.ceil(products.filter((p)=>p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm)).length / itemsPerPage), prev + 1)),
                                        disabled: currentPage === Math.ceil(products.filter((p)=>p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.barcode.includes(searchTerm)).length / itemsPerPage),
                                        children: [
                                            "NEXT",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-4 h-4 ml-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 272,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/products/page.tsx",
                                lineNumber: 240,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/products/page.tsx",
                        lineNumber: 236,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/products/page.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isOpen,
                onOpenChange: setIsOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[425px] bg-background",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-2xl font-black uppercase tracking-tight",
                                    children: selectedProduct ? "Edit Product" : "Add New Product"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/products/page.tsx",
                                    lineNumber: 282,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/products/page.tsx",
                                lineNumber: 281,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-bold uppercase tracking-widest text-muted-foreground",
                                                children: "Product Image"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 288,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3",
                                                children: [
                                                    (imagePreview || selectedProduct?.image) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-muted",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: imagePreview || selectedProduct?.image,
                                                                className: "w-full h-full object-cover",
                                                                alt: "Preview"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                type: "button",
                                                                variant: "destructive",
                                                                size: "icon",
                                                                className: "absolute top-2 right-2 h-7 w-7 rounded-full",
                                                                onClick: ()=>setImagePreview(null),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/products/page.tsx",
                                                                    lineNumber: 304,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center w-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-xl cursor-pointer transition-all hover:bg-muted/50 ${imagePreview || selectedProduct?.image ? 'border-primary/20' : 'border-border'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center justify-center pt-5 pb-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                            className: "w-6 h-6 text-muted-foreground mb-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/products/page.tsx",
                                                                            lineNumber: 311,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-black uppercase tracking-widest text-muted-foreground",
                                                                            children: "Upload Product Image"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/products/page.tsx",
                                                                            lineNumber: 312,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/products/page.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    className: "hidden",
                                                                    accept: "image/*",
                                                                    onChange: handleImageChange
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/products/page.tsx",
                                                                    lineNumber: 314,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/products/page.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-bold uppercase tracking-widest text-muted-foreground",
                                                children: "Product Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                name: "name",
                                                defaultValue: selectedProduct?.name,
                                                required: true,
                                                placeholder: "e.g. Classic Burger"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-bold uppercase tracking-widest text-muted-foreground",
                                                children: "Barcode"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        name: "barcode",
                                                        value: scannedBarcode || selectedProduct?.barcode || "",
                                                        onChange: (e)=>setScannedBarcode(e.target.value),
                                                        required: true,
                                                        placeholder: "Scan or type barcode",
                                                        className: "font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        type: "button",
                                                        variant: "secondary",
                                                        size: "icon",
                                                        onClick: ()=>setShowScanner(true),
                                                        className: "shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/products/page.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-bold uppercase tracking-widest text-muted-foreground",
                                                        children: "Price (₱)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        name: "price",
                                                        type: "number",
                                                        step: "0.01",
                                                        defaultValue: selectedProduct?.price,
                                                        required: true,
                                                        placeholder: "0.00"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 346,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-black uppercase tracking-widest text-muted-foreground",
                                                                children: "Current Stock"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                                lineNumber: 352,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                name: "stock",
                                                                type: "number",
                                                                defaultValue: selectedProduct?.stock || 0,
                                                                required: true,
                                                                className: "h-11 rounded-xl"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-black uppercase tracking-widest text-muted-foreground",
                                                                children: "Alert Threshold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                name: "lowStockThreshold",
                                                                type: "number",
                                                                defaultValue: selectedProduct?.lowStockThreshold || 5,
                                                                required: true,
                                                                className: "h-11 rounded-xl"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 350,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-bold uppercase tracking-widest text-muted-foreground",
                                                children: "Category"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                name: "category",
                                                defaultValue: selectedProduct?.category,
                                                placeholder: "e.g. Food"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/products/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/products/page.tsx",
                                lineNumber: 286,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: ()=>{
                                            setIsOpen(false);
                                            setScannedBarcode("");
                                        },
                                        children: "CANCEL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                        lineNumber: 367,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "font-bold",
                                        children: "SAVE PRODUCT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/products/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/products/page.tsx",
                                lineNumber: 366,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/products/page.tsx",
                        lineNumber: 280,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/products/page.tsx",
                    lineNumber: 279,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/products/page.tsx",
                lineNumber: 278,
                columnNumber: 13
            }, this),
            showScanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$CameraScanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraScanner"], {
                onScan: (barcode)=>{
                    setScannedBarcode(barcode);
                    setShowScanner(false);
                },
                onClose: ()=>setShowScanner(false)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/products/page.tsx",
                lineNumber: 379,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/products/page.tsx",
        lineNumber: 110,
        columnNumber: 9
    }, this);
}
_s(ProductsManagement, "LKUTstvBQqkX7sjutXI/XvGArTw=");
_c = ProductsManagement;
var _c;
__turbopack_context__.k.register(_c, "ProductsManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7efc97e7._.js.map