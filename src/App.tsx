"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Heart, Package, Star, User, Ticket, Menu } from "lucide-react";
import DeskTopMenu from "./refactoringCode/DeskTopMenu";

export default function MyPage() {
  const [activeTab, setActiveTab] = useState("orders");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "orders", label: "주문 내역", icon: Package },
    { id: "wishlist", label: "관심 상품", icon: Heart },
    { id: "reviews", label: "리뷰 관리", icon: Star },
    { id: "profile", label: "회원 정보 수정", icon: User },
    { id: "coupons", label: "쿠폰함", icon: Ticket },
  ];
  const onClickTab = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <Card>
            <CardHeader>
              <CardTitle>주문 내역</CardTitle>
              <CardDescription>
                진행 중인 주문, 배송 중, 배송 완료된 주문을 조회합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-200px)]">
                {["진행 중", "배송 중", "배송 완료"].map((status, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">{status}</h3>
                    <div className="space-y-2">
                      {[1, 2].map((order) => (
                        <div
                          key={order}
                          className="flex justify-between items-center bg-muted p-2 rounded"
                        >
                          <span>주문 #{order}</span>
                          <Badge>{status}</Badge>
                        </div>
                      ))}
                    </div>
                    {index < 2 && <Separator className="my-2" />}
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        );
      case "wishlist":
        return (
          <Card>
            <CardHeader>
              <CardTitle>관심 상품</CardTitle>
              <CardDescription>찜한 상품 리스트를 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-200px)]">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="flex justify-between items-center mb-2 bg-muted p-2 rounded"
                  >
                    <span>관심 상품 {item}</span>
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4 mr-2" />찜 해제
                    </Button>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        );
      case "reviews":
        return (
          <Card>
            <CardHeader>
              <CardTitle>리뷰 관리</CardTitle>
              <CardDescription>
                작성한 리뷰를 확인하고 수정합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-200px)]">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="mb-4 bg-muted p-2 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">상품 {review}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < 4
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm mb-2">리뷰 내용 {review}...</p>
                    <Button variant="outline" size="sm">
                      수정
                    </Button>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        );
      case "profile":
        return (
          <Card>
            <CardHeader>
              <CardTitle>회원 정보 수정</CardTitle>
              <CardDescription>
                개인정보와 비밀번호를 변경합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email">이메일</Label>
                  <Input type="email" id="email" placeholder="이메일" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="name">이름</Label>
                  <Input type="text" id="name" placeholder="이름" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="password">새 비밀번호</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="새 비밀번호"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="confirm-password">비밀번호 확인</Label>
                  <Input
                    type="password"
                    id="confirm-password"
                    placeholder="비밀번호 확인"
                  />
                </div>
                <Button>정보 수정</Button>
              </form>
            </CardContent>
          </Card>
        );
      case "coupons":
        return (
          <Card>
            <CardHeader>
              <CardTitle>쿠폰함</CardTitle>
              <CardDescription>
                보유 중인 쿠폰 리스트와 유효기간을 확인합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-200px)]">
                {[1, 2, 3, 4].map((coupon) => (
                  <div
                    key={coupon}
                    className="flex justify-between items-center mb-2 bg-muted p-2 rounded"
                  >
                    <div>
                      <span className="font-semibold">10% 할인 쿠폰</span>
                      <p className="text-sm text-muted-foreground">
                        유효기간: 2023-12-31
                      </p>
                    </div>
                    <Badge variant="outline">
                      <Ticket className="w-4 h-4 mr-1" />
                      사용 가능
                    </Badge>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <DeskTopMenu menuItems={menuItems} onClickMenu={onClickTab} />

      {/* Main content */}
      <main className="flex-1 p-4 overflow-auto">
        {/* Mobile menu */}
        <div className="md:hidden mb-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col space-y-2 mt-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center px-4 py-2 text-left ${
                      activeTab === item.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted-foreground/10"
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-2" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {renderContent()}
      </main>
    </div>
  );
}
