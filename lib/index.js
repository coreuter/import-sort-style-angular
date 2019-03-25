"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(styleApi) {
    const { alias, and, dotSegmentCount, hasNoMember, hasOnlyNamedMembers, isNodeModule, isAbsoluteModule, isRelativeModule, moduleName, naturally, not, unicode, } = styleApi;
    const isAngularModule = (imported) => Boolean(imported.moduleName.match(/^@angular\//));
    const isNgxsModule = (imported) => Boolean(imported.moduleName.match(/^@ngxs(?:-labs)?\//));
    const isScopedAppModule = (imported) => Boolean(imported.moduleName.match(/^@app\//));
    const isScopedCoreModule = (imported) => Boolean(imported.moduleName.match(/^@core\//));
    const isScopedModule = (imported) => Boolean(imported.moduleName.startsWith("@"));
    const isCssModule = (imported) => Boolean(imported.moduleName.match(/\.s?css$/));
    const isRootModule = (imported) => Boolean(imported.moduleName.match(/^~\//));
    const isLocalModule = (imported) => Boolean(imported.moduleName.match(/^\.\//));
    return [
        // import "foo"
        { match: and(hasNoMember, isAbsoluteModule) },
        { separator: true },
        // import "./foo" or import  "~/foo"
        { match: and(hasNoMember, isRelativeModule, not(isCssModule)) },
        { match: and(hasNoMember, isRootModule, not(isCssModule)) },
        { separator: true },
        // import ... from "fs";
        {
            match: isNodeModule,
            sort: moduleName(naturally),
            sortNamedMembers: alias(naturally),
        },
        { separator: true },
        // import ... from "foo";
        {
            match: and(isAbsoluteModule, not(isScopedModule)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import {...} "@angular/...";
        {
            match: isAngularModule,
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import ... "@ngxs/..." or "@ngxs-labs/...";
        {
            match: isNgxsModule,
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import ... "@app/...";
        {
            match: isScopedAppModule,
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import ... "@core/...";
        {
            match: isScopedCoreModule,
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import ... "@...";
        {
            match: and(isScopedModule, not(isAngularModule), not(isNgxsModule), not(isScopedAppModule)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import ... from "../foo";
        {
            match: and(isRelativeModule, not(isCssModule), not(isLocalModule)),
            sort: [dotSegmentCount, moduleName(naturally)],
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import ... from "./foo";
        {
            match: isLocalModule,
            sort: [dotSegmentCount, moduleName(naturally)],
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import styles from "foo.(s)css";
        {
            match: isCssModule,
            sort: [dotSegmentCount, moduleName(naturally)],
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        { separator: true },
    ];
}
exports.default = default_1;
