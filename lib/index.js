"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(styleApi) {
    const { alias, and, dotSegmentCount, hasNoMember, isNodeModule, isAbsoluteModule, isRelativeModule, moduleName, naturally, not, unicode } = styleApi;
    const isAngularModule = (imported) => Boolean(imported.moduleName.match(/^@angular\//));
    const isNgxsModule = (imported) => Boolean(imported.moduleName.match(/^@ngxs(?:-labs)?\//));
    const isScopedAppModule = (imported) => Boolean(imported.moduleName.match(/^@app\//));
    const isScopedCoreModule = (imported) => Boolean(imported.moduleName.match(/^@core\//));
    const isScopedModule = (imported) => Boolean(imported.moduleName.startsWith('@'));
    const isCssModule = (imported) => Boolean(imported.moduleName.match(/\.s?css$/));
    const isRootModule = (imported) => Boolean(imported.moduleName.match(/^~\//));
    const isLocalModule = (imported) => Boolean(imported.moduleName.match(/^\.\//));
    return [
        { match: and(hasNoMember, isAbsoluteModule) },
        { separator: true },
        { match: and(hasNoMember, isRelativeModule, not(isCssModule)) },
        { match: and(hasNoMember, isRootModule, not(isCssModule)) },
        { separator: true },
        {
            match: isNodeModule,
            sort: moduleName(naturally),
            sortNamedMembers: alias(naturally)
        },
        { separator: true },
        {
            match: and(isAbsoluteModule, not(isScopedModule)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode)
        },
        { separator: true },
        {
            match: isAngularModule,
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode)
        },
        { separator: true },
        {
            match: isNgxsModule,
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode)
        },
        { separator: true },
        {
            match: isScopedAppModule,
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode)
        },
        { separator: true },
        {
            match: isScopedCoreModule,
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode)
        },
        { separator: true },
        {
            match: and(isScopedModule, not(isAngularModule), not(isNgxsModule), not(isScopedAppModule)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode)
        },
        { separator: true },
        {
            match: and(isRelativeModule, not(isCssModule), not(isLocalModule)),
            sort: [dotSegmentCount, moduleName(naturally)],
            sortNamedMembers: alias(unicode)
        },
        { separator: true },
        {
            match: isLocalModule,
            sort: [dotSegmentCount, moduleName(naturally)],
            sortNamedMembers: alias(unicode)
        },
        { separator: true },
        {
            match: isCssModule,
            sort: [dotSegmentCount, moduleName(naturally)],
            sortNamedMembers: alias(unicode)
        },
        { separator: true },
        { separator: true }
    ];
}
exports.default = default_1;
