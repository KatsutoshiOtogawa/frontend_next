// @ts-check
import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
// next exportでは使えないので変更
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Prefecture } from '../components/Prefecture'


/**
 * @typedef {Object} PrefData - prefectureのデータ
 * @property {number} prefCode - 県名コード
 * @property {string} prefName - 県名
 */

/**
* @typedef {Object} PrefectureJson - Prefectureのjson
 * @property {string} message - SpecialTypeの文字列プロパティ
 * @property {{prefCode: number; prefName: string;}[]} result - 県データ
 */

/**
 * @typedef {Object} Props - Prefectureのprops
 * @property {PrefectureJson} data - SpecialTypeの文字列プロパティ
 */

/**
 * @returns {JSX.Element}
 */
export default function Prefectures() {

  /** @type {PrefectureJson} */
  let data = {
    message: null,
    result: [
      {
        prefCode: null,
        prefName: null
      }
    ]
  };

  /** @type { React.Dispatch<React.SetStateAction<PrefectureJson>>} */
  let setData
  [data, setData] = React.useState(data);

  React.useEffect(() => {

    (async () => {
      const options = {
        method: 'GET',
        headers: { 
        },
      }
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL, options);

      if (response.status != 200) {
        console.error('fetch failed');
        console.error(await response.text())
        return;
      }
      /** @type {PrefectureJson} */
      const json = await response.json()

      setData(json);

    })();
    // useEffectを一回だけ使いたいけど、eslinterのエラーが出るのでそれを消すために使う。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  // build時に一緒に値を出してしまう.
  return (
    <>
      {

        data.result.map((value) => {
          return  <Prefecture key={value.prefCode} prefName={value.prefName} prefCode={value.prefCode} />
        })
      }

    <p>
      HelloWorld
    </p>
    </>
  )
}
