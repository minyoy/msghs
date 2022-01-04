import turtle as t
import math

tm = 0.3
ux = 0
uy = 0
dx = 0
dy = 0
g = 9.8
velo = 0
ang = 0

def draw():
    velo = 50
    ang = math.radians(45)

t.clearstamps()
t.hideturtle()
t.setpos(0,0)
t.showturtle()
t.stamp()

hl = -(t.window_height() /2)

ux = velo * math.cos(ang)
uy = velo * math.sin(ang)

while True:
    uy = uy + (-1*g) * tm
    dy = t.ycor() + (uy*tm) - (g*tm**2) /2
    dx = t.xcor() + (ux*tm)
    if dy > hl:
        t.goto(dx,dy)
        t.stamp()
    else:
        break