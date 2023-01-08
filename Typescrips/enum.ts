enum Membership {
    Simple,
    Standart,
    Premium = 'Premium'
}

const membership = Membership.Simple
const membership1 = Membership[1]
const membership2 = Membership.Premium
console.log(membership, membership1, membership2)