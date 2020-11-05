import sys

assert(len(sys.argv) == 2)

p = Integer(sys.argv[1])

if(p == 0):
  print("Nobody knows...")
  print("All numbers?")
else:
  if(is_prime(p)):
    print("Prime")
  else:
    print("Composite")
  print(factor(p))
