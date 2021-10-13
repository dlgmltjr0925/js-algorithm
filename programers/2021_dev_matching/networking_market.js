function solution(enroll, referral, seller, amount) {
  const answer = Array.from({ length: enroll.length }, () => 0);
  const ref = {};
  const total = {};
  for (let i = 0; i < enroll.length; i++) {
    ref[enroll[i]] = referral[i];
    total[enroll[i]] = 0;
  }

  function payFee(referral, revenue) {
    if (referral === '-' || revenue === 0) return;
    const fee = parseInt(revenue / 10);
    total[referral] += revenue - fee;
    payFee(ref[referral], fee);
  }

  for (let i = 0; i < seller.length; i++) {
    const revenue = amount[i] * 100;
    payFee(seller[i], revenue);
  }

  return Object.values(total);
}
