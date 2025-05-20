"use client"

import Map from "./Map"
import styles from "./page.module.css"
import { useState } from "react"

export default function Store() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentArea}>
        <div className={styles.title}>
          <img src="/images/store_title.png"/>
        </div>
        <div className={styles.storeArea}>
          <div className={styles.searchArea}>
            <form name="fsearch" method="get">
              <div className={styles.searchInput}>
                <select name="addr1" className={styles.addr1}>
                  <option value="">도/시</option>
                </select>
                <select name="addr2" className={styles.addr2}>
                  <option value="">구/군</option>
                </select>
                <input 
                  type="text" 
                  placeholder="매장명" 
                  value={searchTerm}
                  onChange={handleSearchChange}
                  id="search" 
                  name="search"
                />
              </div>
              <div className={styles.btnArea}>
                <button type="submit" className={styles.btnSearch}>검색</button>
              </div>
            </form>
            <div className={styles.searchListArea}> </div>
          </div>
          <div className={styles.mapArea}>
            <Map/>
          </div>
        </div>
      </div>
    </div>
  )
}
