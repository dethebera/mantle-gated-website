import React, { useEffect } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout, useUser } from "@thirdweb-dev/react";
import { getUser } from "../auth.config";
import checkBalance from "../util/checkBalance";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { MantleTestnet } from "@thirdweb-dev/chains";

export default function Home() {
  const { logout } = useLogout();
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoading, isLoggedIn, router]);

  return (
    <div>
      <div>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Mantle Ecosystem Fund</title>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t/* cspell:disable-file */\n\t\t/* webkit printing magic: print all background colors */\n\t\thtml {\n\t\t\t-webkit-print-color-adjust: exact;\n\t\t}\n\n\t\t* {\n\t\t\tbox-sizing: border-box;\n\t\t\t-webkit-print-color-adjust: exact;\n\t\t}\n\n\t\thtml,\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\n\t\t@media only screen {\n\t\t\tbody {\n\t\t\t\tmargin: 2em auto;\n\t\t\t\tmax-width: 900px;\n\t\t\t\tcolor: rgb(55, 53, 47);\n\t\t\t}\n\t\t}\n\n\t\tbody {\n\t\t\tline-height: 1.5;\n\t\t\twhite-space: pre-wrap;\n\t\t}\n\n\t\ta,\n\t\ta.visited {\n\t\t\tcolor: inherit;\n\t\t\ttext-decoration: underline;\n\t\t}\n\n\t\t.pdf-relative-link-path {\n\t\t\tfont-size: 80%;\n\t\t\tcolor: #444;\n\t\t}\n\n\t\th1,\n\t\th2,\n\t\th3 {\n\t\t\tletter-spacing: -0.01em;\n\t\t\tline-height: 1.2;\n\t\t\tfont-weight: 600;\n\t\t\tmargin-bottom: 0;\n\t\t}\n\n\t\t.page-title {\n\t\t\tfont-size: 2.5rem;\n\t\t\tfont-weight: 700;\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0.75em;\n\t\t}\n\n\t\th1 {\n\t\t\tfont-size: 1.875rem;\n\t\t\tmargin-top: 1.875rem;\n\t\t}\n\n\t\th2 {\n\t\t\tfont-size: 1.5rem;\n\t\t\tmargin-top: 1.5rem;\n\t\t}\n\n\t\th3 {\n\t\t\tfont-size: 1.25rem;\n\t\t\tmargin-top: 1.25rem;\n\t\t}\n\n\t\t.source {\n\t\t\tborder: 1px solid #ddd;\n\t\t\tborder-radius: 3px;\n\t\t\tpadding: 1.5em;\n\t\t\tword-break: break-all;\n\t\t}\n\n\t\t.callout {\n\t\t\tborder-radius: 3px;\n\t\t\tpadding: 1rem;\n\t\t}\n\n\t\tfigure {\n\t\t\tmargin: 1.25em 0;\n\t\t\tpage-break-inside: avoid;\n\t\t}\n\n\t\tfigcaption {\n\t\t\topacity: 0.5;\n\t\t\tfont-size: 85%;\n\t\t\tmargin-top: 0.5em;\n\t\t}\n\n\t\tmark {\n\t\t\tbackground-color: transparent;\n\t\t}\n\n\t\t.indented {\n\t\t\tpadding-left: 1.5em;\n\t\t}\n\n\t\thr {\n\t\t\tbackground: transparent;\n\t\t\tdisplay: block;\n\t\t\twidth: 100%;\n\t\t\theight: 1px;\n\t\t\tvisibility: visible;\n\t\t\tborder: none;\n\t\t\tborder-bottom: 1px solid rgba(55, 53, 47, 0.09);\n\t\t}\n\n\t\timg {\n\t\t\tmax-width: 100%;\n\t\t}\n\n\t\t@media only print {\n\t\t\timg {\n\t\t\t\tmax-height: 100vh;\n\t\t\t\tobject-fit: contain;\n\t\t\t}\n\t\t}\n\n\t\t@page {\n\t\t\tmargin: 1in;\n\t\t}\n\n\t\t.collection-content {\n\t\t\tfont-size: 0.875rem;\n\t\t}\n\n\t\t.column-list {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t}\n\n\t\t.column {\n\t\t\tpadding: 0 1em;\n\t\t}\n\n\t\t.column:first-child {\n\t\t\tpadding-left: 0;\n\t\t}\n\n\t\t.column:last-child {\n\t\t\tpadding-right: 0;\n\t\t}\n\n\t\t.table_of_contents-item {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 0.875rem;\n\t\t\tline-height: 1.3;\n\t\t\tpadding: 0.125rem;\n\t\t}\n\n\t\t.table_of_contents-indent-1 {\n\t\t\tmargin-left: 1.5rem;\n\t\t}\n\n\t\t.table_of_contents-indent-2 {\n\t\t\tmargin-left: 3rem;\n\t\t}\n\n\t\t.table_of_contents-indent-3 {\n\t\t\tmargin-left: 4.5rem;\n\t\t}\n\n\t\t.table_of_contents-link {\n\t\t\ttext-decoration: none;\n\t\t\topacity: 0.7;\n\t\t\tborder-bottom: 1px solid rgba(55, 53, 47, 0.18);\n\t\t}\n\n\t\ttable,\n\t\tth,\n\t\ttd {\n\t\t\tborder: 1px solid rgba(55, 53, 47, 0.09);\n\t\t\tborder-collapse: collapse;\n\t\t}\n\n\t\ttable {\n\t\t\tborder-left: none;\n\t\t\tborder-right: none;\n\t\t}\n\n\t\tth,\n\t\ttd {\n\t\t\tfont-weight: normal;\n\t\t\tpadding: 0.25em 0.5em;\n\t\t\tline-height: 1.5;\n\t\t\tmin-height: 1.5em;\n\t\t\ttext-align: left;\n\t\t}\n\n\t\tth {\n\t\t\tcolor: rgba(55, 53, 47, 0.6);\n\t\t}\n\n\t\tol,\n\t\tul {\n\t\t\tmargin: 0;\n\t\t\tmargin-block-start: 0.6em;\n\t\t\tmargin-block-end: 0.6em;\n\t\t}\n\n\t\tli>ol:first-child,\n\t\tli>ul:first-child {\n\t\t\tmargin-block-start: 0.6em;\n\t\t}\n\n\t\tul>li {\n\t\t\tlist-style: disc;\n\t\t}\n\n\t\tul.to-do-list {\n\t\t\ttext-indent: -1.7em;\n\t\t}\n\n\t\tul.to-do-list>li {\n\t\t\tlist-style: none;\n\t\t}\n\n\t\t.to-do-children-checked {\n\t\t\ttext-decoration: line-through;\n\t\t\topacity: 0.375;\n\t\t}\n\n\t\tul.toggle>li {\n\t\t\tlist-style: none;\n\t\t}\n\n\t\tul {\n\t\t\tpadding-inline-start: 1.7em;\n\t\t}\n\n\t\tul>li {\n\t\t\tpadding-left: 0.1em;\n\t\t}\n\n\t\tol {\n\t\t\tpadding-inline-start: 1.6em;\n\t\t}\n\n\t\tol>li {\n\t\t\tpadding-left: 0.2em;\n\t\t}\n\n\t\t.mono ol {\n\t\t\tpadding-inline-start: 2em;\n\t\t}\n\n\t\t.mono ol>li {\n\t\t\ttext-indent: -0.4em;\n\t\t}\n\n\t\t.toggle {\n\t\t\tpadding-inline-start: 0em;\n\t\t\tlist-style-type: none;\n\t\t}\n\n\t\t/* Indent toggle children */\n\t\t.toggle>li>details {\n\t\t\tpadding-left: 1.7em;\n\t\t}\n\n\t\t.toggle>li>details>summary {\n\t\t\tmargin-left: -1.1em;\n\t\t}\n\n\t\t.selected-value {\n\t\t\tdisplay: inline-block;\n\t\t\tpadding: 0 0.5em;\n\t\t\tbackground: rgba(206, 205, 202, 0.5);\n\t\t\tborder-radius: 3px;\n\t\t\tmargin-right: 0.5em;\n\t\t\tmargin-top: 0.3em;\n\t\t\tmargin-bottom: 0.3em;\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\t.collection-title {\n\t\t\tdisplay: inline-block;\n\t\t\tmargin-right: 1em;\n\t\t}\n\n\t\t.simple-table {\n\t\t\tmargin-top: 1em;\n\t\t\tfont-size: 0.875rem;\n\t\t\tempty-cells: show;\n\t\t}\n\n\t\t.simple-table td {\n\t\t\theight: 29px;\n\t\t\tmin-width: 120px;\n\t\t}\n\n\t\t.simple-table th {\n\t\t\theight: 29px;\n\t\t\tmin-width: 120px;\n\t\t}\n\n\t\t.simple-table-header-color {\n\t\t\tbackground: rgb(247, 246, 243);\n\t\t\tcolor: black;\n\t\t}\n\n\t\t.simple-table-header {\n\t\t\tfont-weight: 500;\n\t\t}\n\n\t\ttime {\n\t\t\topacity: 0.5;\n\t\t}\n\n\t\t.icon {\n\t\t\tdisplay: inline-block;\n\t\t\tmax-width: 1.2em;\n\t\t\tmax-height: 1.2em;\n\t\t\ttext-decoration: none;\n\t\t\tvertical-align: text-bottom;\n\t\t\tmargin-right: 0.5em;\n\t\t}\n\n\t\timg.icon {\n\t\t\tborder-radius: 3px;\n\t\t}\n\n\t\t.user-icon {\n\t\t\twidth: 1.5em;\n\t\t\theight: 1.5em;\n\t\t\tborder-radius: 100%;\n\t\t\tmargin-right: 0.5rem;\n\t\t}\n\n\t\t.user-icon-inner {\n\t\t\tfont-size: 0.8em;\n\t\t}\n\n\t\t.text-icon {\n\t\t\tborder: 1px solid #000;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t.page-cover-image {\n\t\t\tdisplay: block;\n\t\t\tobject-fit: cover;\n\t\t\twidth: 100%;\n\t\t\tmax-height: 30vh;\n\t\t}\n\n\t\t.page-header-icon {\n\t\t\tfont-size: 3rem;\n\t\t\tmargin-bottom: 1rem;\n\t\t}\n\n\t\t.page-header-icon-with-cover {\n\t\t\tmargin-top: -0.72em;\n\t\t\tmargin-left: 0.07em;\n\t\t}\n\n\t\t.page-header-icon img {\n\t\t\tborder-radius: 3px;\n\t\t}\n\n\t\t.link-to-page {\n\t\t\tmargin: 1em 0;\n\t\t\tpadding: 0;\n\t\t\tborder: none;\n\t\t\tfont-weight: 500;\n\t\t}\n\n\t\tp>.user {\n\t\t\topacity: 0.5;\n\t\t}\n\n\t\ttd>.user,\n\t\ttd>time {\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\tinput[type=\"checkbox\"] {\n\t\t\ttransform: scale(1.5);\n\t\t\tmargin-right: 0.6em;\n\t\t\tvertical-align: middle;\n\t\t}\n\n\t\tp {\n\t\t\tmargin-top: 0.5em;\n\t\t\tmargin-bottom: 0.5em;\n\t\t}\n\n\t\t.image {\n\t\t\tborder: none;\n\t\t\tmargin: 1.5em 0;\n\t\t\tpadding: 0;\n\t\t\tborder-radius: 0;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t.code,\n\t\tcode {\n\t\t\tbackground: rgba(135, 131, 120, 0.15);\n\t\t\tborder-radius: 3px;\n\t\t\tpadding: 0.2em 0.4em;\n\t\t\tborder-radius: 3px;\n\t\t\tfont-size: 85%;\n\t\t\ttab-size: 2;\n\t\t}\n\n\t\tcode {\n\t\t\tcolor: #eb5757;\n\t\t}\n\n\t\t.code {\n\t\t\tpadding: 1.5em 1em;\n\t\t}\n\n\t\t.code-wrap {\n\t\t\twhite-space: pre-wrap;\n\t\t\tword-break: break-all;\n\t\t}\n\n\t\t.code>code {\n\t\t\tbackground: none;\n\t\t\tpadding: 0;\n\t\t\tfont-size: 100%;\n\t\t\tcolor: inherit;\n\t\t}\n\n\t\tblockquote {\n\t\t\tfont-size: 1.25em;\n\t\t\tmargin: 1em 0;\n\t\t\tpadding-left: 1em;\n\t\t\tborder-left: 3px solid rgb(55, 53, 47);\n\t\t}\n\n\t\t.bookmark {\n\t\t\ttext-decoration: none;\n\t\t\tmax-height: 8em;\n\t\t\tpadding: 0;\n\t\t\tdisplay: flex;\n\t\t\twidth: 100%;\n\t\t\talign-items: stretch;\n\t\t}\n\n\t\t.bookmark-title {\n\t\t\tfont-size: 0.85em;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t\theight: 1.75em;\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\t.bookmark-text {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t}\n\n\t\t.bookmark-info {\n\t\t\tflex: 4 1 180px;\n\t\t\tpadding: 12px 14px 14px;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: space-between;\n\t\t}\n\n\t\t.bookmark-image {\n\t\t\twidth: 33%;\n\t\t\tflex: 1 1 180px;\n\t\t\tdisplay: block;\n\t\t\tposition: relative;\n\t\t\tobject-fit: cover;\n\t\t\tborder-radius: 1px;\n\t\t}\n\n\t\t.bookmark-description {\n\t\t\tcolor: rgba(55, 53, 47, 0.6);\n\t\t\tfont-size: 0.75em;\n\t\t\toverflow: hidden;\n\t\t\tmax-height: 4.5em;\n\t\t\tword-break: break-word;\n\t\t}\n\n\t\t.bookmark-href {\n\t\t\tfont-size: 0.75em;\n\t\t\tmargin-top: 0.25em;\n\t\t}\n\n\t\t.sans {\n\t\t\tfont-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\t\t}\n\n\t\t.code {\n\t\t\tfont-family: \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace;\n\t\t}\n\n\t\t.serif {\n\t\t\tfont-family: Lyon-Text, Georgia, ui-serif, serif;\n\t\t}\n\n\t\t.mono {\n\t\t\tfont-family: iawriter-mono, Nitti, Menlo, Courier, monospace;\n\t\t}\n\n\t\t.pdf .sans {\n\t\t\tfont-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP';\n\t\t}\n\n\t\t.pdf:lang(zh-CN) .sans {\n\t\t\tfont-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC';\n\t\t}\n\n\t\t.pdf:lang(zh-TW) .sans {\n\t\t\tfont-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC';\n\t\t}\n\n\t\t.pdf:lang(ko-KR) .sans {\n\t\t\tfont-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR';\n\t\t}\n\n\t\t.pdf .code {\n\t\t\tfont-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP';\n\t\t}\n\n\t\t.pdf:lang(zh-CN) .code {\n\t\t\tfont-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC';\n\t\t}\n\n\t\t.pdf:lang(zh-TW) .code {\n\t\t\tfont-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC';\n\t\t}\n\n\t\t.pdf:lang(ko-KR) .code {\n\t\t\tfont-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR';\n\t\t}\n\n\t\t.pdf .serif {\n\t\t\tfont-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP';\n\t\t}\n\n\t\t.pdf:lang(zh-CN) .serif {\n\t\t\tfont-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC';\n\t\t}\n\n\t\t.pdf:lang(zh-TW) .serif {\n\t\t\tfont-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC';\n\t\t}\n\n\t\t.pdf:lang(ko-KR) .serif {\n\t\t\tfont-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR';\n\t\t}\n\n\t\t.pdf .mono {\n\t\t\tfont-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP';\n\t\t}\n\n\t\t.pdf:lang(zh-CN) .mono {\n\t\t\tfont-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC';\n\t\t}\n\n\t\t.pdf:lang(zh-TW) .mono {\n\t\t\tfont-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC';\n\t\t}\n\n\t\t.pdf:lang(ko-KR) .mono {\n\t\t\tfont-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR';\n\t\t}\n\n\t\t.highlight-default {\n\t\t\tcolor: rgba(55, 53, 47, 1);\n\t\t}\n\n\t\t.highlight-gray {\n\t\t\tcolor: rgba(120, 119, 116, 1);\n\t\t\tfill: rgba(120, 119, 116, 1);\n\t\t}\n\n\t\t.highlight-brown {\n\t\t\tcolor: rgba(159, 107, 83, 1);\n\t\t\tfill: rgba(159, 107, 83, 1);\n\t\t}\n\n\t\t.highlight-orange {\n\t\t\tcolor: rgba(217, 115, 13, 1);\n\t\t\tfill: rgba(217, 115, 13, 1);\n\t\t}\n\n\t\t.highlight-yellow {\n\t\t\tcolor: rgba(203, 145, 47, 1);\n\t\t\tfill: rgba(203, 145, 47, 1);\n\t\t}\n\n\t\t.highlight-teal {\n\t\t\tcolor: rgba(68, 131, 97, 1);\n\t\t\tfill: rgba(68, 131, 97, 1);\n\t\t}\n\n\t\t.highlight-blue {\n\t\t\tcolor: rgba(51, 126, 169, 1);\n\t\t\tfill: rgba(51, 126, 169, 1);\n\t\t}\n\n\t\t.highlight-purple {\n\t\t\tcolor: rgba(144, 101, 176, 1);\n\t\t\tfill: rgba(144, 101, 176, 1);\n\t\t}\n\n\t\t.highlight-pink {\n\t\t\tcolor: rgba(193, 76, 138, 1);\n\t\t\tfill: rgba(193, 76, 138, 1);\n\t\t}\n\n\t\t.highlight-red {\n\t\t\tcolor: rgba(212, 76, 71, 1);\n\t\t\tfill: rgba(212, 76, 71, 1);\n\t\t}\n\n\t\t.highlight-gray_background {\n\t\t\tbackground: rgba(241, 241, 239, 1);\n\t\t}\n\n\t\t.highlight-brown_background {\n\t\t\tbackground: rgba(244, 238, 238, 1);\n\t\t}\n\n\t\t.highlight-orange_background {\n\t\t\tbackground: rgba(251, 236, 221, 1);\n\t\t}\n\n\t\t.highlight-yellow_background {\n\t\t\tbackground: rgba(251, 243, 219, 1);\n\t\t}\n\n\t\t.highlight-teal_background {\n\t\t\tbackground: rgba(237, 243, 236, 1);\n\t\t}\n\n\t\t.highlight-blue_background {\n\t\t\tbackground: rgba(231, 243, 248, 1);\n\t\t}\n\n\t\t.highlight-purple_background {\n\t\t\tbackground: rgba(244, 240, 247, 0.8);\n\t\t}\n\n\t\t.highlight-pink_background {\n\t\t\tbackground: rgba(249, 238, 243, 0.8);\n\t\t}\n\n\t\t.highlight-red_background {\n\t\t\tbackground: rgba(253, 235, 236, 1);\n\t\t}\n\n\t\t.block-color-default {\n\t\t\tcolor: inherit;\n\t\t\tfill: inherit;\n\t\t}\n\n\t\t.block-color-gray {\n\t\t\tcolor: rgba(120, 119, 116, 1);\n\t\t\tfill: rgba(120, 119, 116, 1);\n\t\t}\n\n\t\t.block-color-brown {\n\t\t\tcolor: rgba(159, 107, 83, 1);\n\t\t\tfill: rgba(159, 107, 83, 1);\n\t\t}\n\n\t\t.block-color-orange {\n\t\t\tcolor: rgba(217, 115, 13, 1);\n\t\t\tfill: rgba(217, 115, 13, 1);\n\t\t}\n\n\t\t.block-color-yellow {\n\t\t\tcolor: rgba(203, 145, 47, 1);\n\t\t\tfill: rgba(203, 145, 47, 1);\n\t\t}\n\n\t\t.block-color-teal {\n\t\t\tcolor: rgba(68, 131, 97, 1);\n\t\t\tfill: rgba(68, 131, 97, 1);\n\t\t}\n\n\t\t.block-color-blue {\n\t\t\tcolor: rgba(51, 126, 169, 1);\n\t\t\tfill: rgba(51, 126, 169, 1);\n\t\t}\n\n\t\t.block-color-purple {\n\t\t\tcolor: rgba(144, 101, 176, 1);\n\t\t\tfill: rgba(144, 101, 176, 1);\n\t\t}\n\n\t\t.block-color-pink {\n\t\t\tcolor: rgba(193, 76, 138, 1);\n\t\t\tfill: rgba(193, 76, 138, 1);\n\t\t}\n\n\t\t.block-color-red {\n\t\t\tcolor: rgba(212, 76, 71, 1);\n\t\t\tfill: rgba(212, 76, 71, 1);\n\t\t}\n\n\t\t.block-color-gray_background {\n\t\t\tbackground: rgba(241, 241, 239, 1);\n\t\t}\n\n\t\t.block-color-brown_background {\n\t\t\tbackground: rgba(244, 238, 238, 1);\n\t\t}\n\n\t\t.block-color-orange_background {\n\t\t\tbackground: rgba(251, 236, 221, 1);\n\t\t}\n\n\t\t.block-color-yellow_background {\n\t\t\tbackground: rgba(251, 243, 219, 1);\n\t\t}\n\n\t\t.block-color-teal_background {\n\t\t\tbackground: rgba(237, 243, 236, 1);\n\t\t}\n\n\t\t.block-color-blue_background {\n\t\t\tbackground: rgba(231, 243, 248, 1);\n\t\t}\n\n\t\t.block-color-purple_background {\n\t\t\tbackground: rgba(244, 240, 247, 0.8);\n\t\t}\n\n\t\t.block-color-pink_background {\n\t\t\tbackground: rgba(249, 238, 243, 0.8);\n\t\t}\n\n\t\t.block-color-red_background {\n\t\t\tbackground: rgba(253, 235, 236, 1);\n\t\t}\n\n\t\t.select-value-color-pink {\n\t\t\tbackground-color: rgba(245, 224, 233, 1);\n\t\t}\n\n\t\t.select-value-color-purple {\n\t\t\tbackground-color: rgba(232, 222, 238, 1);\n\t\t}\n\n\t\t.select-value-color-green {\n\t\t\tbackground-color: rgba(219, 237, 219, 1);\n\t\t}\n\n\t\t.select-value-color-gray {\n\t\t\tbackground-color: rgba(227, 226, 224, 1);\n\t\t}\n\n\t\t.select-value-color-opaquegray {\n\t\t\tbackground-color: rgba(255, 255, 255, 0.0375);\n\t\t}\n\n\t\t.select-value-color-orange {\n\t\t\tbackground-color: rgba(250, 222, 201, 1);\n\t\t}\n\n\t\t.select-value-color-brown {\n\t\t\tbackground-color: rgba(238, 224, 218, 1);\n\t\t}\n\n\t\t.select-value-color-red {\n\t\t\tbackground-color: rgba(255, 226, 221, 1);\n\t\t}\n\n\t\t.select-value-color-yellow {\n\t\t\tbackground-color: rgba(253, 236, 200, 1);\n\t\t}\n\n\t\t.select-value-color-blue {\n\t\t\tbackground-color: rgba(211, 229, 239, 1);\n\t\t}\n\n\t\t.checkbox {\n\t\t\tdisplay: inline-flex;\n\t\t\tvertical-align: text-bottom;\n\t\t\twidth: 16;\n\t\t\theight: 16;\n\t\t\tbackground-size: 16px;\n\t\t\tmargin-left: 2px;\n\t\t\tmargin-right: 5px;\n\t\t}\n\n\t\t.checkbox-on {\n\t\t\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E\");\n\t\t}\n\n\t\t.checkbox-off {\n\t\t\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E\");\n\t\t}\n\t",
          }}
        />
        <article
          id="f1117945-b3a7-4877-8b54-790b33655510"
          className="page sans"
        >
          <header>
            <img
              className="page-cover-image"
              src={"/Homepage_bg_image.png"}
              style={{ "object-position": "center 50%" }}
            />
            <div className="page-header-icon page-header-icon-with-cover">
              <img
                className="icon"
                src="/Profile_logo.png"
              />
            </div>
            <h1 className="page-title">Mantle Ecosystem Fund</h1>
          </header>
          <div className="page-body">
            <p id="8ad3a1c2-f35b-48d5-b5ca-568f0738f644" className></p>
            <p id="44ae41fe-f478-4a01-be95-3ac932697cec" className>
              The proposal is co-authored by <strong>Mantle Core Team</strong>{" "}
              and <strong>Mirana Ventures.</strong>
            </p>
            <h1 id="423110fa-4ce5-4d9b-95c8-e225cb98bb33" className>
              Background
            </h1>
            <p id="3d255cac-1506-4d51-be1e-79f128817fcd" className>
              Mantle is a high-performance Ethereum layer-2 network built with
              modular architecture; and aligned with BitDAO strategic interests
              via the $BIT token. Ecosystem funds have historically served as an
              important catalyst of growth for new emerging protocols and
              ecosystems, in particular, developer and dAPP adoption of a new
              protocol. This document proposes the first iteration of a Mantle
              EcoFund.
            </p>
            <h1 id="5d75c3b4-c14a-4b7e-b07b-8d6000a7c826" className>
              Objectives
            </h1>
            <p id="e51cf2a8-453e-4909-a227-4f8fe5a03492" className>
              <strong>Primary Objectives</strong>
            </p>
            <ol
              type={1}
              id="308dd6c4-9178-4be0-8227-83e98decdd98"
              className="numbered-list"
              start={1}
            >
              <li>Developer and dAPP adoption of Mantle</li>
            </ol>
            <p id="c417fb63-664e-43b8-9d6e-47bae270672c" className>
              <strong>Secondary Objectives</strong>
            </p>
            <ol
              type={1}
              id="8b96f764-bb25-4ff7-b07c-0b05b171f327"
              className="numbered-list"
              start={1}
            >
              <li>
                Participation of reputable venture funds into the Mantle
                ecosystem
              </li>
            </ol>
            <ol
              type={1}
              id="3c05fbd0-bcfa-47f2-9205-7f82e149225d"
              className="numbered-list"
              start={2}
            >
              <li>
                Sustainability of the Mantle EcoFund via fund performance and
                returns
              </li>
            </ol>
            <ol
              type={1}
              id="0c01a6f1-2dae-4774-801a-3b5aa3759833"
              className="numbered-list"
              start={3}
            >
              <li>Supporting builders of dAPPs</li>
            </ol>
            <p id="a9e8bf04-af87-41d4-8036-ecf7b41220f7" className>
              <em>Note:</em>&nbsp;The Mantle EcoFund design will need to balance
              the primary and secondary objectives above. Key design levers
              include: selectivity of investments (quantity vs quality); and
              degree of exclusivity to Mantle.
            </p>
            <h1 id="ac0ef9ee-7f45-4bec-87ec-8b24d5934f54" className>
              Proposal
            </h1>
            <ol
              type={1}
              id="95ac99b0-06a5-4aad-8201-3248bbeb2efe"
              className="numbered-list"
              start={1}
            >
              <li>
                Authorize the establishment of Mantle EcoFund 1 (with target
                size $100M from BitDAO) as per the details below.
              </li>
            </ol>
            <ol
              type={1}
              id="c96a75c1-7365-4b5e-a427-78d5c7d097cc"
              className="numbered-list"
              start={2}
            >
              <li>
                Authorize the first capital call: $10M USDC from BitDAO
                Treasury.
              </li>
            </ol>
            <p id="8e24a438-24f7-432c-91f3-ebb85655d8c8" className>
              <strong>
                <em>Note:</em>
              </strong>
              <strong>&nbsp;</strong>When the proposal is passed by the BitDAO
              community by a “Yes” vote, the project team(s) are authorized to
              take all necessary actions to accomplish what is contemplated in
              the proposal, including without limitation, forming one or more
              legal entities and executing necessary legal documents. All legal
              and operational structures and documents shall substantially
              reflect the terms and conditions that are set forth in the
              “Summary” and “Details” sections of the proposal. Any material
              deviation from or inconsistency with such terms and conditions,
              except where such deviation or inconsistency is more favorable to
              BitDAO community, shall make the legal structure and documents
              voidable by the community. For the avoidance of doubt, terms that
              provide more governance rights, investor rights, deploy less
              investment amount for substantially the same stake or interest, or
              otherwise provide more economic benefits for BitDAO shall be
              deemed as “more favorable terms”.
            </p>
            <p id="a69b028b-9bbe-442e-a556-2ce45ba94e2e" className></p>
            <h2 id="181af18a-52ba-435f-8ab2-0fea60d6bcbf" className>
              Summary
            </h2>
            <p id="8d15f580-5589-4c6c-ac4c-91e8894fd93e" className>
              <a href="https://global.discourse-cdn.com/business5/uploads/bitdao2/original/1X/e4646fd6772e71bb26ffcdefcbac208118628100.jpeg">
                <strong>Summary1620×934 107 KB</strong>
              </a>
            </p>
            <figure id="f22e63bb-1e8d-4004-80f0-1c9910d809f0" className="image">
              <a href="https://global.discourse-cdn.com/business5/uploads/bitdao2/optimized/1X/e4646fd6772e71bb26ffcdefcbac208118628100_2_690x397.jpeg">
                <img src="https://global.discourse-cdn.com/business5/uploads/bitdao2/optimized/1X/e4646fd6772e71bb26ffcdefcbac208118628100_2_690x397.jpeg" />
              </a>
            </figure>
            <h2 id="60f20c35-c144-4deb-8150-97f9e6c8ef4d" className>
              Details
            </h2>
            <h3 id="3574bb4f-b503-409a-9b9d-fa0ee97848f2" className>
              Size and Fundlife
            </h3>
            <p id="90c56ecf-5691-48c8-b1f5-c9bab27c6d36" className>
              We propose to catalyse a capital pool of $200 million to be
              deployed within the Mantle ecosystem over the next 3 years from
              the Mantle EcoFund and Strategic Venture Partners.
            </p>
            <ul
              id="b8558971-3270-4afa-bf30-e8e7c1a80ee7"
              className="bulleted-list"
            >
              <li style={{ "list-style-type": "disc" }}>
                $100 million USDC would be provided by BitDAO from BitDAO’s
                treasury
              </li>
            </ul>
            <ul
              id="e67b0d2d-9390-4a15-8146-c29d7512f58c"
              className="bulleted-list"
            >
              <li style={{ "list-style-type": "disc" }}>
                The Mantle EcoFund would co-invest with the Strategic Venture
                Partners with a 1:1 co-investment ratio
              </li>
            </ul>
            <ul
              id="36742474-6b5b-481b-89ce-be58de75d02e"
              className="bulleted-list"
            >
              <li style={{ "list-style-type": "disc" }}>
                As such, $100 million would be external matching capital coming
                from Strategic Venture Partners of the BitDAO and Mantle
                ecosystem when they co-invest with Mantle EcoFund
                opportunistically
              </li>
            </ul>
            <h3 id="9e5a2bab-3928-4fdc-a44e-e6d16679d1eb" className>
              Investment Mandate
            </h3>
            <p id="717c3dd2-0c87-4106-818f-f6cc4d3c588c" className>
              The Mantle EcoFund should strive to be the ‘first money’ into
              teams building quality and innovative projects within the Mantle
              ecosystem. We would invest alongside the Strategic Venture
              Partners of BitDAO and Mantle Ecosystem, and start supporting
              projects at the Pre-seed and Seed stage with the option to double
              down on potential big winners with promising traction and stronger
              use cases with $BIT whenever possible.
            </p>
            <p id="0f45661c-ec2f-44a6-b1c6-f9f0b588947a" className>
              For instance, an average ticket size of $500,000 per project from
              the Mantle EcoFund would provision for 200 projects building on
              Mantle. For follow-ons and later stage opportunities, it would
              depend on the fund raising dynamics and structure of each deal,
              subjected to review by the Investment Committee.
            </p>
            <h3 id="553c800d-d9b7-4e87-b00a-c3d3cee66807" className>
              Investment Committee (IC)
            </h3>
            <p id="29869561-dbf4-4566-bb70-b9b56355204f" className>
              To ensure adherence to industry best practices and rigour for
              venture investing, we propose that an independent Investment
              Committee be set up. Note that an “Advisory Committee” function is
              already served by Strategic Venture Partners who signal their
              assessment of each project through their investment decisions.
            </p>
            <p id="4a1aee39-e767-414a-8595-e12d8786c571" className>
              <strong>Policies - IC Membership</strong>
            </p>
            <figure id="fd7df460-be44-42ef-b04e-e9108132b73f" className="image">
              <a href="Link">
                <img src="https://global.discourse-cdn.com/business5/uploads/bitdao2/optimized/1X/c55f1c4fe9619a78d2d821aeb6020c92c25cae62_2_690x195.jpeg" />
              </a>
            </figure>
            <p id="86d3085c-4853-436e-a41c-ed530189eb1a" className>
              <strong>Policies - IC Investments</strong>
            </p>
            <figure id="6adca96d-f712-488b-b60a-f3e8563109ce" className="image">
              <a href="https://global.discourse-cdn.com/business5/uploads/bitdao2/optimized/1X/ffd6094de249e849ef28c85773d05d88a944973e_2_690x440.jpeg">
                <img src="https://global.discourse-cdn.com/business5/uploads/bitdao2/optimized/1X/ffd6094de249e849ef28c85773d05d88a944973e_2_690x440.jpeg" />
              </a>
            </figure>
            <h3 id="2d520438-8ca2-484b-b679-fcedc287fd55" className>
              Strategic Venture Partners
            </h3>
            <p id="d21e7f63-0fce-4785-bb75-0a23f39764b7" className>
              The Mantle EcoFund shall invest alongside Strategic Venture
              Partners to support the growth of the ecosystem. These venture
              partners should be independent, qualified and reputable venture
              funds and/or founders that can provide in-depth industry and
              product experience, strong networks, and have demonstrated
              commercial success and returns for their own funds. Most
              importantly, these Strategic Venture Partners must share the same
              belief in supporting aspiring founders building on the Mantle
              ecosystem.
            </p>
            <p id="8ea35b0a-1a1b-498e-ae6f-fb4d67e4b756" className>
              We believe that having a mix of funds and founders as Strategic
              Ventures Partners would provide new exciting opportunities as
              future growth for the web 3 ecosystem would be catalyzed by
              innovative products built by aspiring founders driven by
              significant market needs and supported by sustainable business and
              revenue models.
            </p>
            <p id="fbfe196c-fd97-4a06-9cc0-22e4c4db154f" className>
              <em>
                Funds who have expressed interest in being Strategic Venture
                Partners include Dragonfly Capital, Pantera, Folius Ventures,
                Play Ventures Future Fund, Spartan, Lemniscap, Selini Capital,
                Cadenza Ventures, and QCP Capital. We welcome more partners who
                are keen to reach out and indicate interest.
              </em>
            </p>
            <p id="8f7c1a13-706c-427d-aa9c-b60b387512e8" className>
              <strong>Policies - Strategic Venture Partner - Membership</strong>
            </p>
            <figure id="cf3dc4a7-1301-4b2e-8de6-673f740afc7d" className="image">
              <a href="">
                <img src="https://global.discourse-cdn.com/business5/uploads/bitdao2/optimized/1X/fc05c43db2afc8256914f467fb508396fe18a493_2_690x129.jpeg" />
              </a>
            </figure>
            <h3 id="1ee7dd04-a155-4e3c-8494-54d32f642545" className>
              Structure, Fees, and Incentives
            </h3>
            <p id="5d0ea4e5-597d-4402-99e9-074e85c6cbd2" className>
              The deployment period for the first $100 million injection from
              BitDAO is targeted to be 3 years, with review on performance and
              key metrics by the Investment Committee twice a year.
            </p>
            <p id="16d7c582-c94b-4da8-9e3f-a3aefd112dfa" className>
              For management fees, we would propose an industry standard 2%
              management fee to support the operating expenses of the EcoFund
              operating team (sourcing, due diligence, legal, portfolio support,
              fund admin, etc.).
            </p>
            <p id="32443f80-9ef8-4cc0-ad64-e635e29f17d3" className>
              <strong>Incentives - Strategic Venture Partners</strong>
            </p>
            <p id="d7622b2d-7001-42e7-9e67-b3501b38e7b1" className>
              In order to catalyse meaningful capital deployment into the Mantle
              ecosystem and stronger post-investment support from the Strategic
              Venture Partners, we propose that 20% of the investment returns of
              the Mantle EcoFund be shared with the Strategic Venture Partners
              after returning the initial capital contributed by BitDAO. This
              incentive provides for more financial alignment between the Mantle
              EcoFund and the Strategic Venture Partners, which translates to a
              stronger joint commitment to support founders and projects
              building on Mantle.
            </p>
            <p id="57b97bdc-7bc7-4ebe-b03d-3ebffb71d309" className>
              Note that each Strategic Venture Partner’s incentives shall be
              calculated independently based on their own EcoFund matched
              portfolio. The EcoFund may also request the Strategic Venture
              Partner to support due diligence and divestments.
            </p>
            <p id="626881b3-2d8b-4888-8d73-60c33cb2bae9" className>
              <strong>Incentives - EcoFund Operating team</strong>
            </p>
            <p id="130d35e2-7a93-4e43-9b70-705e7eecd1ac" className>
              To incentivise the EcoFund Operating team, we propose a carry 10%
              (reduced from industry norm of 20% to 30%) of fund returns after
              principal has been returned to BitDAO. Note that this applies to
              the total portfolio and not sub-portfolios of each Strategic
              Venture Partner. For clarity, there will be no carry until the
              entirety of the investment principal ($100M) has been returned to
              BitDAO.
            </p>
            <p id="781cb4f1-fe19-49fc-b75e-cdeeea918c5a" className>
              <strong>Policies - Fund Structure and Operator Incentives</strong>
            </p>
            <p id="427be718-8bc5-47c8-a956-1fcecee44dd2" className>
              <a href="https://global.discourse-cdn.com/business5/uploads/bitdao2/original/1X/5a338a4257d0d397d4f482223d7fcf1146b52499.jpeg">
                <strong>
                  Policies - Fund Structure and Operator Incentives1572×742 203
                  KB
                </strong>
              </a>
            </p>
            <figure id="60fb8d7f-c09d-4bc9-a9df-08c3f0d5e625" className="image">
              <a href="https://global.discourse-cdn.com/business5/uploads/bitdao2/optimized/1X/5a338a4257d0d397d4f482223d7fcf1146b52499_2_690x325.jpeg">
                <img src="https://global.discourse-cdn.com/business5/uploads/bitdao2/optimized/1X/5a338a4257d0d397d4f482223d7fcf1146b52499_2_690x325.jpeg" />
              </a>
            </figure>
            <p id="75b3ea59-12c8-4d54-b70c-5bfbc6eaa09d" className>
              <strong>
                Simplified Example - Using Two Strategic Venture Partners
              </strong>
            </p>
            <p id="a63b61ca-5b00-4127-86ad-409129ebe192" className>
              <a href="https://global.discourse-cdn.com/business5/uploads/bitdao2/original/1X/839559f104bb53abc3dda84173b1e0d1328e9e0f.jpeg">
                <strong>
                  Simplified Example - Using Two Strategic Venture
                  Partners1806×894 75.5 KB
                </strong>
              </a>
            </p>
            <figure id="ef60998d-667e-4379-b2e7-a8387fc97046" className="image">
              <a href="https://global.discourse-cdn.com/business5/uploads/bitdao2/optimized/1X/839559f104bb53abc3dda84173b1e0d1328e9e0f_2_690x341.jpeg">
                <img src="https://global.discourse-cdn.com/business5/uploads/bitdao2/optimized/1X/839559f104bb53abc3dda84173b1e0d1328e9e0f_2_690x341.jpeg" />
              </a>
            </figure>
            <h3 id="d0ba86c6-d833-4629-8b67-65c695a6edac" className>
              Key Performance Indicators
            </h3>
            <p id="c5b793ce-b315-475c-8db7-e51e4de6e26e" className>
              Developmental Target
            </p>
            <ul
              id="63102583-7ff9-462d-a6e6-3504c788b4d6"
              className="bulleted-list"
            >
              <li style={{ "list-style-type": "disc" }}>
                More than 100 Projects deployed on Mantle Ecosystem over a
                period of 3 years
              </li>
            </ul>
            <p id="6aacaebd-10b1-4a07-9c5a-b0cc665bfc9b" className>
              Financial Returns Target
            </p>
            <ul
              id="6e17a6e4-7574-403c-bd4e-bd4d48c21d93"
              className="bulleted-list"
            >
              <li style={{ "list-style-type": "disc" }}>
                Target Multiple on Invested Capital (MOIC) of &gt;1.5x
              </li>
            </ul>
            <h1 id="fbb32f87-0578-4bc0-8c5a-637c0572d4d7" className>
              Analysis
            </h1>
            <h3 id="2f2f9625-b48c-4dfa-83a4-27f966f8fc62" className>
              Existing Models
            </h3>
            <p id="09ca7061-dd0e-4617-bf39-30df2100d4b0" className>
              Various models of ecosystem funds currently exist in the market;
              each with varying efficacy in addressing the key objectives
              outlined earlier and operating with different levels of
              efficiency. With the goal of creating a model and approach best
              suited and reflective of Mantle’s long term vision, we have
              evaluated 4 types of ecosystem funds (‘EcoFund’) based on
              information that is available publicly.
            </p>
            <h3 id="cb0abdc9-d08e-4dfd-ba04-ea19f774100f" className>
              EcoFund Type 1: Soft commitment from investors
            </h3>
            <ul
              id="afb5ec55-6ed0-4307-82fd-49416436b89d"
              className="bulleted-list"
            >
              <li style={{ "list-style-type": "disc" }}>
                Example: Oasis Protocol’s Ecosystem Fund
                <ul
                  id="3efd5b7d-8dcb-49d3-8637-9e7c71b75226"
                  className="bulleted-list"
                >
                  <li style={{ "list-style-type": "circle" }}>
                    Investors pledge $XX to support the projects building on
                    Oasis Network
                  </li>
                </ul>
                <ul
                  id="ace58531-3547-4385-b88a-38b11683ff41"
                  className="bulleted-list"
                >
                  <li style={{ "list-style-type": "circle" }}>
                    MOU between Oasis &amp; Investors
                  </li>
                </ul>
                <ul
                  id="82d4acf8-9d01-405b-a000-9d5d970fee71"
                  className="bulleted-list"
                >
                  <li style={{ "list-style-type": "circle" }}>
                    <a href="https://oasisprotocol.org/ecosystem-fund">
                      Oasis Network - Ecosystem&nbsp;1
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <h3 id="a63fd8b7-140c-442c-8b5e-96457f04b00b" className>
              EcoFund Type 2: Tokens as incentives for investors and projects
            </h3>
            <ul
              id="52f8efae-bbbf-4bf4-8c9a-c467a035585e"
              className="bulleted-list"
            >
              <li style={{ "list-style-type": "disc" }}>
                Example: Flow’s Ecosystem Fund
                <ul
                  id="3bcbcf49-851c-4a9c-8854-1f6f9c4158b8"
                  className="bulleted-list"
                >
                  <li style={{ "list-style-type": "circle" }}>
                    Investors pledge $XX to support the projects building on
                    Flow
                  </li>
                </ul>
                <ul
                  id="20af1c4d-7fdc-4595-a5fa-3be3d0671d1b"
                  className="bulleted-list"
                >
                  <li style={{ "list-style-type": "circle" }}>
                    Flow Foundation provides Flow Token Grants to investors
                    <ul
                      id="ce58f34a-5ad4-4a2d-8ced-8d86ee9d7e0d"
                      className="bulleted-list"
                    >
                      <li style={{ "list-style-type": "square" }}>
                        Each investor acts as a decentralised grant partner
                      </li>
                    </ul>
                    <ul
                      id="eae20621-37b0-4355-b669-11f3f40d037d"
                      className="bulleted-list"
                    >
                      <li style={{ "list-style-type": "square" }}>
                        Up to 1-1 matching with tokens for Flow projects
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul
                  id="39746b0a-fba2-42bc-a159-ce4447d9aa62"
                  className="bulleted-list"
                >
                  <li style={{ "list-style-type": "circle" }}>
                    MOU between Flow &amp; Investors
                  </li>
                </ul>
                <ul
                  id="fafe9e9a-252f-42ee-9bbe-84c761f47be3"
                  className="bulleted-list"
                >
                  <li style={{ "list-style-type": "circle" }}>
                    <a href="https://www.prnewswire.com/news-releases/flow-launches-725-million-ecosystem-fund-to-drive-innovation-across-the-flow-ecosystem-301543823.html">
                      Flow Launches $725 Million Ecosystem Fund to Drive
                      Innovation Across the Flow Ecosystem&nbsp;2
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <h3 id="ba887950-eef0-4e34-8ffa-429aeec173d2" className>
              EcoFund Type 3: Independent venture fund with external LPs
            </h3>
            <ul
              id="87805858-0643-47fe-8d5f-73c696f3c217"
              className="bulleted-list"
            >
              <li style={{ "list-style-type": "disc" }}>
                Example: Avalanche’s Blizzard Fund
                <ul
                  id="f0f3a70b-f966-4d90-a967-d7ca25669a9b"
                  className="bulleted-list"
                >
                  <li style={{ "list-style-type": "circle" }}>
                    A new venture fund managed by independent fund manager is
                    set up with investors/institutions coming in as LPs
                  </li>
                </ul>
                <ul
                  id="ad7e5b8f-8ba8-49a3-8063-09e089d63d06"
                  className="bulleted-list"
                >
                  <li style={{ "list-style-type": "circle" }}>
                    Fund is primarily returns driven and provides early access /
                    investment opportunities for LPs to promising projects in
                    the ecosystem
                  </li>
                </ul>
                <ul
                  id="0b61de05-7664-4bd9-a443-f64f9184b796"
                  className="bulleted-list"
                >
                  <li style={{ "list-style-type": "circle" }}>
                    Standard subscription and limited partnership agreement
                    between fund manager and LPs
                  </li>
                </ul>
                <ul
                  id="2ef9ee6a-10e8-4cac-9a4f-3280d18bbc29"
                  className="bulleted-list"
                >
                  <li style={{ "list-style-type": "circle" }}>
                    <a href="https://www.coindesk.com/tech/2021/11/01/avalanche-developers-and-investors-form-200m-blizzard-investment-fund/">
                      Avalanche Developers and Investors Form $200M ‘Blizzard’
                      Investment Fund
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <h3 id="f26c1c4a-29a7-4752-b613-0379ccd605e6" className>
              EcoFund Type 4: Internal fund from treasury
            </h3>
            <ul
              id="ae47a0a7-28ec-47af-97a6-fa2af779341b"
              className="bulleted-list"
            >
              <li style={{ "list-style-type": "disc" }}>
                Example: Polygon’s Ecosystem Fund
                <ul
                  id="4550612e-1941-45a5-ac2f-dbce11cc1a64"
                  className="bulleted-list"
                >
                  <li style={{ "list-style-type": "circle" }}>
                    Financed by the capital Polygon raised previously or from
                    their treasury
                  </li>
                </ul>
                <ul
                  id="83a4819b-cbdf-4ad3-9cdd-6eac05c7a944"
                  className="bulleted-list"
                >
                  <li style={{ "list-style-type": "circle" }}>
                    Operated internally by Polygon team, focusing on both
                    development goals and returns
                  </li>
                </ul>
                <ul
                  id="4bc43aef-6043-4d35-a94f-bec4d18686e1"
                  className="bulleted-list"
                >
                  <li style={{ "list-style-type": "circle" }}>
                    <a href="https://www.coindesk.com/business/2021/04/28/polygon-launches-100m-fund-to-support-defi-adoption">
                      Polygon Launches $100M Fund to Support DeFi Adoption
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <h2 id="d724e841-e058-4a1c-9db9-20179c58e6a9" className>
              Comparison Summary
            </h2>
            <figure id="c7e5833e-4257-4807-98ab-f697b1cc6656" className="image">
              <a href="https://global.discourse-cdn.com/business5/uploads/bitdao2/optimized/1X/1d3ce5dde0b7fbed05f79699ceaebb4b8318ecc6_2_690x365.jpeg">
                <img src="https://global.discourse-cdn.com/business5/uploads/bitdao2/optimized/1X/1d3ce5dde0b7fbed05f79699ceaebb4b8318ecc6_2_690x365.jpeg" />
              </a>
            </figure>
            <h2 id="5c8aa0c5-29fc-4bce-b4b8-0e15495c8d28" className>
              Recommendations
            </h2>
            <p id="82c3650b-9a9e-4af6-86f7-ff9618839af3" className>
              Based on the internal review of the pros and cons of the existing
              ecosystem fund structures in the market, we feel that for Mantle
              &amp; BitDAO, we should innovate on existing approaches and design
              a model which is in line with the long term vision of Mantle. We
              believe that the proposed Mantle EcoFund structure would help
              achieve the following goals:
            </p>
            <ol
              type={1}
              id="abf3c7fb-b5aa-451f-a277-aebb2f452418"
              className="numbered-list"
              start={1}
            >
              <li>
                Ensure commercial alignment with reputable external investors to
                promote higher commitment
              </li>
            </ol>
            <ol
              type={1}
              id="5d6d2878-9516-44e0-a60d-9acbcf5720c2"
              className="numbered-list"
              start={2}
            >
              <li>
                Strike a better balance between generating returns (for
                EcoFund’s sustainability and longevity) and achieving
                development goals for the Mantle ecosystem
              </li>
            </ol>
            <ol
              type={1}
              id="6c5810c1-75e9-4b52-947d-47756704b955"
              className="numbered-list"
              start={3}
            >
              <li>
                Adhere to the industry’s best practices and rigour for venture
                investing
              </li>
            </ol>
            <h1 id="a99e42a9-a80d-4b03-963c-89bd306e22f8" className>
              How to get involved
            </h1>
            <ul
              id="a1234b26-9243-4dab-a8e0-39b9041b7100"
              className="bulleted-list"
            >
              <li style={{ "list-style-type": "disc" }}>
                Discuss the proposal in the comments below
              </li>
            </ul>
            <ul
              id="0e8c4fdd-cde3-4b20-93b8-dc8c993d2d8e"
              className="bulleted-list"
            >
              <li style={{ "list-style-type": "disc" }}>
                Reach out via: ecofund@mantle.xyz
              </li>
            </ul>
          </div>
        </article>
      </div>

      <p></p>

      <button className={styles.mainButton} onClick={logout}>
        Return
      </button>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const user = await getUser(context.req);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Ensure we are able to generate an auth token using our private key instantiated SDK
  const PRIVATE_KEY = process.env.THIRDWEB_AUTH_PRIVATE_KEY;
  if (!PRIVATE_KEY) {
    throw new Error("You need to add an PRIVATE_KEY environment variable.");
  }

  // Instantiate our SDK
  const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.THIRDWEB_AUTH_PRIVATE_KEY,
    MantleTestnet,
  );

  // Check to see if the user has an NFT
  const hasNft = await checkBalance(sdk, user.address);

  // If they don't have an NFT, redirect them to the login page
  if (!hasNft) {
    console.log("User", user.address, "doesn't have an NFT! Redirecting...");
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Finally, return the props
  return {
    props: {},
  };
}
