import React from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="py-20">
      <Container>
        <div className="glass rounded-2xl p-8">
          <div className="font-display text-2xl font-bold text-slate-900">Page not found</div>
          <p className="mt-2 text-slate-600">The page you’re looking for doesn’t exist.</p>
          <div className="mt-6">
            <Link to="/">
              <Button>Back home</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
