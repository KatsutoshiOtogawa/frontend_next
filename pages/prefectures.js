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

  // build時に一緒に値を出してしまう.
  return (
    <>
    <Prefecture />

    <p>
      HelloWorld
    </p>
    </>
  )
}
