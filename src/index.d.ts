import { Plugin } from 'vite';

export interface CopyTarget {
    src: string | string[];
    dest: string | string[];
    rename?: string | ((name: string, ext: string, src: string) => string);
    transform?: (contents: Buffer, filename: string) => Promise<Buffer> | Buffer;
    [key: string]: any;
}

export interface CopyOptions {
    copyOnce?: boolean;
    copySync?: boolean;
    flatten?: boolean;
    hook?: 'buildStart' | 'buildEnd' | 'generateBundle' | string;
    targets: CopyTarget[];
    verbose?: boolean;
    [key: string]: any;
}

/**
 * Returns a Vite-compatible plugin that copies files after the build process.
 * 
 * @param options Configuration options for the copy plugin.
 */
export default function copy(options?: CopyOptions): Plugin;
