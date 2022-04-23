// @ts-check
import Head from 'next/head'
import Link from 'next/link'
import React, { useDebugValue } from 'react';
// next exportでは使えないので変更
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Prefecture } from '../components/Prefecture'

import { useSession } from "next-auth/react"

/**
 * @typedef {Object} Props - Prefectureのprops
 * @property {number} [size] - SpecialTypeの文字列プロパティ
 */


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
 * 
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
  const options = {
    method: 'GET',
    headers: { 
      // 'X-API-KEY': process.env.PREFECUTRE_API_KEY
    },
  }

  const API_URL = "https://asia-northeast2-github-for-personal-build.cloudfunctions.net/resas_prefecture"

  const api_url = process.env.API_URL
  React.useEffect(() => {

    (async function() {
      const response = await fetch(api_url, options);

      if (response.status != 200) {
        console.error('fetch failed');
        return;
      }
      /** @type {PrefectureJson} */
      const json = await response.json();

      setData(json);
    }());

    // useEffectを一回だけ使いたいけど、eslinterのエラーが出るのでそれを消すために使う。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  // callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any): void[]
  // data.map((value) => {
  // data.map((value) => {
  //   console.log(value.prefName);
  //   console.log(value.prefCode);


//   const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
  return (
    <>
    <Prefecture />
    {
      
    data.result.forEach((value) => {
      <>
      <li>{value.prefCode}</li>
      <li>{value.prefName}</li>
      </>
    })
    }
    <p>
      HelloWorld
    </p>
    </>
  )
}
