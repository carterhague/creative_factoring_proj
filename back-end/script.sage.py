

# This file was *autogenerated* from the file script.sage
from sage.all_cmdline import *   # import sage library

_sage_const_2 = Integer(2); _sage_const_1 = Integer(1); _sage_const_0 = Integer(0)
import sys

assert(len(sys.argv) == _sage_const_2 )

p = Integer(sys.argv[_sage_const_1 ])

if(p == _sage_const_0 ):
  print("Nobody knows...")
  print("All numbers?")
else:
  if(is_prime(p)):
    print("Prime")
  else:
    print("Composite")
  print(factor(p))

