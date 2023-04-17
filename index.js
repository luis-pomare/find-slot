function meetingPlanner(slotsA, slotsB, dur) {
  let ia = 0
  let ib = 0

  while (ia < slotsA.length && ib < slotsB.length) {
    let start = Math.max(slotsA[ia][0], slotsB[ib][0])
    let end = Math.min(slotsA[ia][1], slotsB[ib][1])
    if (start + dur <= end) {
      return [start, start + dur]
    }
    else if (slotsA[ia][1] < slotsB[ib][1]) {
      ia++
    } else { ib++ }
  }
  return []
}
